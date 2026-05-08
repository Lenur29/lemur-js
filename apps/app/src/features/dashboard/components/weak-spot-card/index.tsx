import { Link } from 'react-router';

import generatePath from '@/core/router/generate-path';
import { RoutePath } from '@/core/router/constants';

import Card from '@/shared/ui/card';
import SegmentedProgress from '@/shared/ui/segmented-progress';

import type { Topic, TopicProgress } from '../../mocks/data';

export type WeakSpotCardProps = {
  topic: Topic;
  progress: TopicProgress;
};

const WeakSpotCard = ({ topic, progress }: WeakSpotCardProps) => {
  const answered = progress.correct + progress.wrong;

  return (
    <Card
      render={
        <Link to={generatePath(RoutePath.Topic, { topicSlug: topic.slug })} />
      }
      className="block rounded-md p-3.5 transition-colors hover:border-text-subtle"
    >
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h4 className="text-sm font-medium">{topic.title}</h4>
        <span className="shrink-0 text-xs text-danger">
          {progress.wrong} wrong out of {answered} answered
        </span>
      </div>
      <SegmentedProgress
        max={topic.total}
        className="h-1"
        segments={[
          { value: progress.correct, tone: 'success' },
          { value: progress.wrong, tone: 'danger' },
        ]}
      />
    </Card>
  );
};

export default WeakSpotCard;
