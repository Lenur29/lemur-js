import { Progress } from '@base-ui/react/progress';

export type ProgressBarProps = Progress.Root.Props;

const ProgressBar = (props: ProgressBarProps) => (
  <Progress.Root {...props}>
    <Progress.Track className="block h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
      <Progress.Indicator className="block h-full rounded-full bg-accent transition-[width,transform] duration-500 ease-out data-[indeterminate]:animate-pulse" />
    </Progress.Track>
  </Progress.Root>
);

export default ProgressBar;
