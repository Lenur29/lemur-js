import type { RouteObject } from 'react-router';

import { RoutePath } from '@/core/router/constants';
import { lazyRoute } from '@/core/router/lazy-route';

export const dashboardRoutes: RouteObject[] = [
  { path: RoutePath.Dashboard, lazy: lazyRoute(() => import('./pages/dashboard-page')) },
];
