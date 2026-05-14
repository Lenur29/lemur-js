import { ApolloLink, CombinedGraphQLErrors } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import { isNestJsGraphQLError, logErrorMessages } from '@pcg/graphql-kit';

import { RoutePath } from '@/core/router/constants';

let redirectInFlight = false;

const redirectToLogin = (): void => {
  if (redirectInFlight || window.location.pathname === RoutePath.Login) return;
  redirectInFlight = true;
  const redirectUri = encodeURIComponent(window.location.pathname + window.location.search);
  window.location.replace(`${RoutePath.Login}?redirect_uri=${redirectUri}`);
};

export const apolloRequestIdLink = new SetContextLink((prevContext) => ({
  headers: {
    ...(prevContext.headers as Record<string, string> | undefined),
    'x-request-id': crypto.randomUUID(),
  },
}));

// Adds ?operation=<OperationName> to the request URL so it shows up
// readable in DevTools Network tab and in API access logs.
export const apolloQueryNameLink = new ApolloLink((operation, forward) => {
  const queryName = operation.operationName;
  operation.setContext(() => ({
    uri: `${import.meta.env.VITE_LEMUR_API_GQL_URL}?operation=${queryName}`,
  }));
  return forward(operation);
});

export const apolloErrorLink = new ErrorLink((handlerOpts) => {
  const { error } = handlerOpts;
  if (!CombinedGraphQLErrors.is(error)) return;

  const unauthenticated = error.errors.some(
    (err) =>
      isNestJsGraphQLError(err) &&
      (err.extensions.statusCode === 401 ||
        err.extensions.key === 'SESSION_INVALID' ||
        err.extensions.key === 'SESSION_EXPIRED' ||
        err.extensions.key === 'ACCESS_TOKEN_EXPIRED' ||
        err.extensions.key === 'ACCESS_TOKEN_INVALID'),
  );

  if (unauthenticated) {
    redirectToLogin();
    return;
  }

  for (const err of error.errors) {
    if (!isNestJsGraphQLError(err)) continue;
    logErrorMessages(handlerOpts);
  }
});
