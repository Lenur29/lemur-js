import { Link } from 'react-router';

import generatePath from '@/core/router/generate-path';
import { RoutePath } from '@/core/router/constants';

import Card from '@/shared/ui/card';
import SegmentedProgress from '@/shared/ui/segmented-progress';

import type { Topic, TopicProgress } from '../../mocks/data';

export type TopicCardProps = {
  topic: Topic;
  progress: TopicProgress;
};

const TopicCard = ({ topic, progress }: TopicCardProps) => {
  const answered = progress.correct + progress.wrong;

  return (
    <Card
      render={
        <Link to={generatePath(RoutePath.Topic, { topicSlug: topic.slug })} />
      }
      className="block p-4 transition-colors hover:border-text-subtle active:scale-[.995]"
    >
      <h3 className="text-sm font-medium">{topic.title}</h3>
      <p className="mt-1 mb-2.5 truncate text-xs leading-snug text-text-muted">
        {topic.description}
      </p>
      <p className="mb-2 text-xs text-text-muted">
        {answered} / {topic.total} answered
      </p>
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

export default TopicCard;
