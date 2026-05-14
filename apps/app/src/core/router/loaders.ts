import { type LoaderFunctionArgs, redirect } from 'react-router';

import { getIsAuthenticated, useAuthStore } from '@/stores/auth';

import { RoutePath } from './constants';

/** Loader for routes that require a signed-in user. */
export const protectedLoader = async ({ request }: LoaderFunctionArgs) => {
  await useAuthStore.getState().fetchMe();
  if (getIsAuthenticated()) return null;
  const url = new URL(request.url);
  const target = encodeURIComponent(url.pathname + url.search);
  return redirect(`${RoutePath.Login}?redirect_uri=${target}`);
};

/** Loader for public-only routes (e.g. /login) — signed-in users are bounced away. */
export const loginLoader = async () => {
  await useAuthStore.getState().fetchMe();
  if (getIsAuthenticated()) return redirect(RoutePath.Dashboard);
  return null;
};

/** Loader for the index route `/` — send the user where they belong. */
export const rootLoader = async () => {
  await useAuthStore.getState().fetchMe();
  return redirect(getIsAuthenticated() ? RoutePath.Dashboard : RoutePath.Login);
};
