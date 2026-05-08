import cn from 'clsx';

type Tone = 'success' | 'warning' | 'danger' | 'accent' | 'neutral';

export type SegmentedProgressSegment = {
  value: number;
  tone: Tone;
};

export type SegmentedProgressProps = {
  segments: SegmentedProgressSegment[];
  max?: number;
  className?: string;
};

const toneBgClasses: Record<Tone, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-danger',
  accent: 'bg-accent',
  neutral: 'bg-text-muted',
};

const SegmentedProgress = ({
  segments,
  max,
  className,
}: SegmentedProgressProps) => {
  const sum = segments.reduce((acc, segment) => acc + segment.value, 0);
  const total = max ?? sum;

  return (
    <div
      className={cn(
        'flex h-1.5 w-full overflow-hidden rounded-full bg-surface-muted',
        className,
      )}
    >
      {segments.map((segment, index) => {
        if (segment.value <= 0) return null;
        const width = total > 0 ? (segment.value / total) * 100 : 0;
        return (
          <div
            key={`${segment.tone}-${index}`}
            className={cn(
              'h-full transition-all duration-500',
              toneBgClasses[segment.tone],
            )}
            style={{ width: `${width}%` }}
          />
        );
      })}
    </div>
  );
};

export default SegmentedProgress;
