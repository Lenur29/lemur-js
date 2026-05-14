import { type MeQuery, LoginDocument, LogoutDocument, MeDocument } from '@lm/graphql';

import { apolloClient } from '../client';

export type CurrentUser = MeQuery['me'];

const getMe = (): Promise<CurrentUser | null> =>
  apolloClient
    .query({ query: MeDocument, fetchPolicy: 'cache-first' })
    .then((result) => result.data?.me ?? null);

export const authApi = {
  getMe,
  login: LoginDocument,
  logout: LogoutDocument,
};
