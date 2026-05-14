import { useMutation } from '@apollo/client/react';
import { LoginDocument, LogoutDocument, type LoginInput } from '@lm/graphql';

import { apolloClient } from '@/services/api/client';
import { useAuthStore } from '@/stores/auth';

export const clearLocalSession = async () => {
  await apolloClient.clearStore();
  useAuthStore.getState().clear();
};

export const useLogin = () => {
  const [mutate, state] = useMutation(LoginDocument, {
    update: (cache) => {
      cache.evict({ fieldName: 'me' });
    },
  });

  const login = (input: LoginInput) => mutate({ variables: { input } });

  return [login, state] as const;
};

export const useLogout = () => {
  const [mutate, state] = useMutation(LogoutDocument);

  const logout = async () => {
    await mutate();
    await clearLocalSession();
  };

  return [logout, state] as const;
};
