import { create } from 'zustand';

import { type CurrentUser, authApi } from '@/services/api/auth';

export const AuthStatus = {
  Authenticated: 'authenticated',
  Unauthenticated: 'unauthenticated',
} as const;

export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];

type AuthState = {
  user: CurrentUser | null;
  status: AuthStatus;
  fetchMe: () => Promise<void>;
  clear: () => void;
};

const isRealUser = (user: CurrentUser | null): user is CurrentUser =>
  user != null && !user.id.includes('guest');

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  status: AuthStatus.Unauthenticated,

  fetchMe: async () => {
    try {
      const me = await authApi.getMe();
      set(
        isRealUser(me)
          ? { user: me, status: AuthStatus.Authenticated }
          : { user: null, status: AuthStatus.Unauthenticated },
      );
    } catch {
      set({ user: null, status: AuthStatus.Unauthenticated });
    }
  },

  clear: () => set({ user: null, status: AuthStatus.Unauthenticated }),
}));

export const getIsAuthenticated = () =>
  useAuthStore.getState().status === AuthStatus.Authenticated;
