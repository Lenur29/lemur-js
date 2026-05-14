import { RoutePath } from '@/core/router/constants';

export const safeRedirect = (uri: string | null | undefined): string => {
  if (!uri) return RoutePath.Dashboard;
  try {
    const parsed = new URL(uri, window.location.origin);
    if (parsed.origin !== window.location.origin) return RoutePath.Dashboard;
    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return RoutePath.Dashboard;
  }
};
