import { ApolloProvider } from '@apollo/client/react';
import { RouterProvider } from 'react-router';

import { apolloClient } from '@/services/api/client';

import { Toaster } from '@/shared/ui/toast';

import { router } from './router';

export const App = () => (
  <ApolloProvider client={apolloClient}>
    <Toaster>
      <RouterProvider router={router} />
    </Toaster>
  </ApolloProvider>
);
