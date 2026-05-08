import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import cn from 'clsx';

type Tone = 'neutral' | 'success' | 'warning' | 'danger' | 'accent';

type BadgeState = { tone: Tone };

export type BadgeProps = useRender.ComponentProps<'span', BadgeState> & {
  tone?: Tone;
};

const toneClasses: Record<Tone, string> = {
  neutral: 'bg-surface-muted text-text-muted',
  success: 'bg-success-bg text-success',
  warning: 'bg-warning-bg text-warning',
  danger: 'bg-danger-bg text-danger',
  accent: 'bg-accent-bg text-accent',
};

const Badge = ({ render, tone = 'neutral', ...rest }: BadgeProps) => {
  const state: BadgeState = { tone };

  const defaults: useRender.ElementProps<'span'> = {
    className: cn(
      'inline-flex h-6 items-center gap-1 whitespace-nowrap rounded-md px-2 text-xs font-medium',
      toneClasses[tone],
    ),
  };

  return useRender({
    defaultTagName: 'span',
    render,
    state,
    props: mergeProps<'span'>(defaults, rest),
  });
};

export default Badge;
