import { CombinedGraphQLErrors, type ErrorLike } from '@apollo/client';
import { isNestJsGraphQLError } from '@pcg/graphql-kit';
import type { GraphQLFormattedError } from 'graphql';

import { toast } from '@/shared/ui/toast';

type ErrorHandler = {
  code: string;
  notification?: string | ((err: GraphQLFormattedError) => string);
  action?: (err: GraphQLFormattedError) => void;
};

type Options = {
  catchAll?: boolean;
  defaultMessage?: string;
  nativeError?: boolean;
  toastTitle?: string;
};

type AnyApolloError = ErrorLike | GraphQLFormattedError;

const NOISE_NAMES = new Set(['AbortError']);

const getCode = (err: AnyApolloError): string =>
  isNestJsGraphQLError(err) ? err.extensions.key : err.message;

export const catchApolloErrors = (
  errors: unknown,
  toCatch: ErrorHandler[] = [],
  options: Options = {},
): void => {
  const {
    catchAll = true,
    nativeError = false,
    defaultMessage = 'Something went wrong. Please try again.',
    toastTitle = 'Error',
  } = options;

  if (!errors) return;

  const list = Array.isArray(errors) ? errors : [errors];
  const flat: AnyApolloError[] = list.flatMap((err) =>
    CombinedGraphQLErrors.is(err) ? err.errors : [err as ErrorLike],
  );
  if (!flat.length) return;

  const uncaught: AnyApolloError[] = [];

  for (const err of flat) {
    if (NOISE_NAMES.has((err as Error).name)) continue;
    const handler = toCatch.find((h) => h.code === getCode(err));
    if (handler) {
      handler.action?.(err as GraphQLFormattedError);
      if (handler.notification) {
        const msg =
          typeof handler.notification === 'function'
            ? handler.notification(err as GraphQLFormattedError)
            : handler.notification;
        toast.error(toastTitle, msg);
      }
    } else {
      uncaught.push(err);
    }
  }

  if (catchAll && uncaught.length) {
    const first = uncaught[0];
    const msg = nativeError && first?.message ? first.message : defaultMessage;
    toast.error(toastTitle, msg);
  }
};
