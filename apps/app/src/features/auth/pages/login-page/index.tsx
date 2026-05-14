import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { useLogin } from '@/services/api/auth/mutations';
import { catchApolloErrors } from '@/services/api/utils/catch-apollo-errors';

import { safeRedirect } from '@/shared/tools/safe-redirect';
import Button from '@/shared/ui/button';
import LemurLogo from '@/shared/ui/lemur-logo';

const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [login, { loading }] = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await login({ email, password });
      navigate(safeRedirect(searchParams.get('redirect_uri')), { replace: true });
    } catch (error) {
      catchApolloErrors(error, [], { toastTitle: 'Sign in failed', nativeError: true });
    }
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-center lg:hidden">
        <LemurLogo size={96} />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p className="mt-1.5 text-sm text-text-muted">
        Sign in to track your interview prep progress.
      </p>

      <form
        className="mt-8 space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-text-subtle focus:shadow-[0_0_0_3px_oklch(55%_0.2_265/0.12)]"
        />

        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-text-subtle focus:shadow-[0_0_0_3px_oklch(55%_0.2_265/0.12)]"
        />

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>

      <p className="mt-8 text-center text-xs text-text-muted">
        By continuing, you agree to our terms of service.
      </p>
    </div>
  );
};

export default LoginPage;
