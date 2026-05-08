import Card from '@/shared/ui/card';
import SegmentedProgress from '@/shared/ui/segmented-progress';

import SegmentLegend from '../segment-legend';

export type WelcomeCardProps = {
  displayName: string;
  answered: number;
  total: number;
  correct: number;
  wrong: number;
};

const WelcomeCard = ({
  displayName,
  answered,
  total,
  correct,
  wrong,
}: WelcomeCardProps) => (
  <Card className="p-5">
    <h1 className="text-[22px] font-medium leading-tight tracking-tight">
      Welcome back, {displayName}
    </h1>
    <p className="mt-1 mb-3.5 text-sm text-text-muted">
      {answered} / {total} questions answered
    </p>
    <SegmentedProgress
      max={total}
      className="h-2"
      segments={[
        { value: correct, tone: 'success' },
        { value: wrong, tone: 'danger' },
      ]}
    />
    <SegmentLegend
      items={[
        { label: 'correct', count: correct, color: 'success' },
        { label: 'wrong', count: wrong, color: 'danger' },
        {
          label: 'not yet attempted',
          count: Math.max(0, total - correct - wrong),
          color: 'muted',
        },
      ]}
    />
  </Card>
);

export default WelcomeCard;
