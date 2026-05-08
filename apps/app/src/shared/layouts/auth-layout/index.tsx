import { Outlet } from 'react-router';

import LemurLogo from '@/shared/ui/lemur-logo';

const AuthLayout = () => (
  <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
    <aside className="hidden flex-col items-center justify-center gap-5 bg-accent-bg p-12 lg:flex">
      <LemurLogo size={220} />
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-accent-strong">
          Lemur
        </h2>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-accent-strong/80">
          JavaScript interview prep, made friendly
        </p>
      </div>
    </aside>

    <main className="flex items-center justify-center px-4 py-8 md:px-6 md:py-12">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </main>
  </div>
);

export default AuthLayout;
