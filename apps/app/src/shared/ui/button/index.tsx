import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';
import cn from 'clsx';
import { isValidElement } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type ButtonState = { variant: Variant; size: Size; disabled: boolean };

export type ButtonProps = useRender.ComponentProps<'button', ButtonState> & {
  variant?: Variant;
  size?: Size;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary:
    'border border-border bg-transparent text-text hover:bg-surface-muted',
  ghost: 'bg-transparent text-text hover:bg-surface-muted',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 gap-1.5 px-3 text-sm',
  md: 'h-10 gap-2 px-4 text-sm',
  lg: 'h-12 gap-2 px-6 text-base',
};

const Button = ({
  render,
  variant = 'primary',
  size = 'md',
  disabled,
  ...rest
}: ButtonProps) => {
  const state: ButtonState = { variant, size, disabled: !!disabled };
  const renderingNativeButton =
    !isValidElement(render) || render.type === 'button';

  const defaults: useRender.ElementProps<'button'> = {
    ...(renderingNativeButton
      ? { type: 'button' as const, disabled }
      : { 'aria-disabled': disabled || undefined }),
    className: cn(
      'inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      variantClasses[variant],
      sizeClasses[size],
    ),
  };

  return useRender({
    defaultTagName: 'button',
    render,
    state,
    props: mergeProps<'button'>(defaults, rest),
  });
};

export default Button;
