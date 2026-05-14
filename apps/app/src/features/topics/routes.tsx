import type { RouteObject } from 'react-router';

import { RoutePath } from '@/core/router/constants';
import { lazyRoute } from '@/core/router/lazy-route';

export const topicsRoutes: RouteObject[] = [
  { path: RoutePath.Topics, lazy: lazyRoute(() => import('./pages/topics-page')) },
  { path: RoutePath.Topic, lazy: lazyRoute(() => import('./pages/topic-page')) },
];
