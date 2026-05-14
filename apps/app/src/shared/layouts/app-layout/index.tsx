import { Link, Outlet, useNavigate } from 'react-router';

import { RoutePath } from '@/core/router/constants';

import { useLogout } from '@/services/api/auth/mutations';
import { catchApolloErrors } from '@/services/api/utils/catch-apollo-errors';
import { useAuthStore } from '@/stores/auth';

import DropdownMenu from '@/shared/ui/dropdown-menu';
import LemurLogo from '@/shared/ui/lemur-logo';

const getInitial = (user: { firstName?: string | null; email?: string | null } | null) => {
  if (!user) return '?';
  return (user.firstName?.[0] ?? user.email?.[0] ?? '?').toUpperCase();
};

const AppLayout = () => {
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const [logout, { loading: logoutLoading }] = useLogout();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate(RoutePath.Login, { replace: true });
    } catch (error) {
      catchApolloErrors(error, [], { toastTitle: 'Could not sign out', nativeError: true });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-7xl p-4 md:px-6">
        <header className="mb-5 flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3">
          <Link
            to={RoutePath.Dashboard}
            aria-label="Lemur"
            className="flex select-none items-center gap-2.5"
          >
            <LemurLogo size={50} />
          </Link>

          {/* TODO: placeholder — replace with real navigation later */}
          <p className="hidden text-sm font-medium text-text lg:block">JavaScript interview prep</p>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              aria-label="Open user menu"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-accent-bg text-[13px] font-medium text-accent-strong outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {getInitial(user)}
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                disabled={logoutLoading}
                onClick={() => {
                  void handleSignOut();
                }}
              >
                {logoutLoading ? 'Signing out…' : 'Sign out'}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
