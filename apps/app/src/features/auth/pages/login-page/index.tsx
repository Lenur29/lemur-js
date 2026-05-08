import { Mail } from 'lucide-react';
import { useState } from 'react';

import Button from '@/shared/ui/button';
import LemurLogo from '@/shared/ui/lemur-logo';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  if (emailSent) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-bg">
          <Mail className="h-6 w-6 text-accent-strong" />
        </div>
        <h1 className="text-xl font-semibold tracking-tight">
          Check your inbox
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          We sent a sign-in link to{' '}
          <strong className="font-medium text-text">{email}</strong>
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setEmailSent(false)}
          className="mt-6"
        >
          Use a different email
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-center lg:hidden">
        <LemurLogo size={64} />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p className="mt-1.5 text-sm text-text-muted">
        Sign in to track your interview prep progress.
      </p>

      <Button variant="secondary" size="lg" className="mt-8 w-full">
        Continue with Google
      </Button>

      <div className="my-5 flex items-center gap-3 text-xs text-text-subtle">
        <div className="h-px flex-1 bg-border" />
        <span>or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (!email.trim()) return;
          setEmailSent(true);
        }}
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-10 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-text-subtle focus:shadow-[0_0_0_3px_oklch(55%_0.2_265/0.12)]"
        />
        <Button type="submit" size="lg" className="w-full">
          Send magic link
        </Button>
      </form>

      <p className="mt-8 text-center text-xs text-text-muted">
        By continuing, you agree to our terms of service.
      </p>
    </div>
  );
};

export default LoginPage;
