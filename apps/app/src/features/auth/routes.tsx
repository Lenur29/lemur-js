import type { RouteObject } from 'react-router';

import { RoutePath } from '@/core/router/constants';
import { lazyRoute } from '@/core/router/lazy-route';

export const authRoutes: RouteObject[] = [
  { path: RoutePath.Login, lazy: lazyRoute(() => import('./pages/login-page')) },
];
