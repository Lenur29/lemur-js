import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

import AppLayout from '@/shared/layouts/app-layout';
import AuthLayout from '@/shared/layouts/auth-layout';
import { authRoutes } from '@/features/auth/routes';
import { dashboardRoutes } from '@/features/dashboard/routes';
import { notesRoutes } from '@/features/notes/routes';
import { questionsRoutes } from '@/features/questions/routes';
import { reviewRoutes } from '@/features/review/routes';
import { topicsRoutes } from '@/features/topics/routes';
import { usersRoutes } from '@/features/users/routes';
import { RoutePath } from '@/core/router/constants';

const NotFoundPage = lazy(() => import('../pages/not-found-page'));

export const router = createBrowserRouter([
  { path: RoutePath.Root, element: <Navigate to={RoutePath.Dashboard} replace /> },

  {
    element: <AuthLayout />,
    children: authRoutes,
  },

  {
    element: <AppLayout />,
    children: [
      ...dashboardRoutes,
      ...usersRoutes,
      ...topicsRoutes,
      ...questionsRoutes,
      ...reviewRoutes,
      ...notesRoutes,
    ],
  },

  { path: RoutePath.NotFound, element: <NotFoundPage /> },
]);
