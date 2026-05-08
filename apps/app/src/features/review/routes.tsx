import { lazy } from 'react';
import type { RouteObject } from 'react-router';

import { RoutePath } from '@/core/router/constants';

const ReviewPage = lazy(() => import('./pages/review-page'));

export const reviewRoutes: RouteObject[] = [{ path: RoutePath.Review, element: <ReviewPage /> }];
