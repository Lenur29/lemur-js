import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

import { RoutePath } from '../../router/constants';
import NotFoundPage from '../not-found-page';

const ErrorBoundary = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto max-w-md p-6">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-text-muted">
        An unexpected error occurred. Try reloading the page.
      </p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="cursor-pointer text-accent hover:underline"
        >
          Reload page
        </button>
        <Link to={RoutePath.Root} className="text-accent hover:underline">
          Go home
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;
