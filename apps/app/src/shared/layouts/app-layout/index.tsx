import { Link, NavLink, Outlet } from 'react-router';

import { RoutePath } from '@/core/router/constants';

import { PROFILE } from '@/features/dashboard/mocks/data';

import DropdownMenu from '@/shared/ui/dropdown-menu';
import LemurLogo from '@/shared/ui/lemur-logo';

const navItems = [{ to: RoutePath.Dashboard, label: 'Dashboard' }];

const AppLayout = () => (
  <div className="min-h-screen bg-bg text-text">
    <div className="mx-auto max-w-3xl px-4 pt-2 md:px-6">
      <header className="mb-5 flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3">
        <Link
          to={RoutePath.Dashboard}
          aria-label="Lemur"
          className="flex items-center gap-2.5 select-none"
        >
          <LemurLogo size={28} />
          <span className="text-base font-medium tracking-tight">Lemur</span>
        </Link>

        <nav className="hidden gap-4 text-sm md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-text'
                  : 'text-text-muted transition-colors hover:text-text'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger
            aria-label="Open user menu"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-accent-bg text-[13px] font-medium text-accent-strong outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {PROFILE.initials}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Sign out</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
