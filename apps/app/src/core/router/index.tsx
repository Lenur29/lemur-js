import { createBrowserRouter } from "react-router";

import { authRoutes } from "@/features/auth/routes";
import { dashboardRoutes } from "@/features/dashboard/routes";
import { topicsRoutes } from "@/features/topics/routes";

import AppLayout from "@/shared/layouts/app-layout";
import AuthLayout from "@/shared/layouts/auth-layout";
import FullScreenLoader from "../components/full-screen-loader";
import ErrorBoundary from "../pages/error-boundary";
import NotFoundPage from "../pages/not-found-page";
import { RoutePath } from "./constants";
import { loginLoader, protectedLoader, rootLoader } from "./loaders";

export const router = createBrowserRouter([
	{
		HydrateFallback: FullScreenLoader,
		ErrorBoundary,
		children: [
			{ path: RoutePath.Root, loader: rootLoader },

			{
				loader: loginLoader,
				element: <AuthLayout />,
				children: authRoutes,
			},

			{
				loader: protectedLoader,
				element: <AppLayout />,
				children: [...dashboardRoutes, ...topicsRoutes],
			},

			{ path: RoutePath.NotFound, element: <NotFoundPage /> },
		],
	},
]);
