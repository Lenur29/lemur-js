import cn from 'clsx';

type State = 'default' | 'correct' | 'wrong';

export type OptionButtonProps = {
  label: string;
  state?: State;
  disabled?: boolean;
  onClick?: () => void;
};

const stateClasses: Record<State, string> = {
  default:
    'border-border bg-surface text-text hover:border-text-subtle hover:bg-surface-muted',
  correct: 'border-success bg-success-bg text-text font-medium',
  wrong: 'border-danger bg-danger-bg text-text font-medium',
};

const OptionButton = ({
  label,
  state = 'default',
  disabled,
  onClick,
}: OptionButtonProps) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={cn(
      'rounded-md border px-3.5 py-2.5 text-left text-sm leading-snug transition-colors',
      'disabled:cursor-default',
      stateClasses[state],
    )}
  >
    {label}
  </button>
);

export default OptionButton;
