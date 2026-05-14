import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import {
  apolloErrorLink,
  apolloQueryNameLink,
  apolloRequestIdLink,
} from './links';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_LEMUR_API_GQL_URL,
  credentials: 'include',
});

export const apolloClient = new ApolloClient({
  link: apolloErrorLink
    .concat(apolloRequestIdLink)
    .concat(apolloQueryNameLink)
    .concat(httpLink),
  cache: new InMemoryCache(),
});
