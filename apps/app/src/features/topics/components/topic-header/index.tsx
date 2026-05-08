import Card from '@/shared/ui/card';
import SegmentedProgress from '@/shared/ui/segmented-progress';

export type TopicHeaderProps = {
  title: string;
  description: string;
  total: number;
  correct: number;
  wrong: number;
};

const TopicHeader = ({
  title,
  description,
  total,
  correct,
  wrong,
}: TopicHeaderProps) => {
  const answered = correct + wrong;

  return (
    <Card className="p-5">
      <h1 className="text-[22px] font-medium leading-tight tracking-tight">
        {title}
      </h1>
      <p className="mt-1.5 mb-3.5 text-sm leading-relaxed text-text-muted">
        {description}
      </p>
      <SegmentedProgress
        max={total}
        className="h-2"
        segments={[
          { value: correct, tone: 'success' },
          { value: wrong, tone: 'danger' },
        ]}
      />
      <p className="mt-3 text-[13px] text-text-muted">
        Answered {answered} / {total} · {correct} correct · {wrong} wrong
      </p>
    </Card>
  );
};

export default TopicHeader;
