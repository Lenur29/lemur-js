import TopicCard from '../../components/topic-card';
import WeakSpotCard from '../../components/weak-spot-card';
import WelcomeCard from '../../components/welcome-card';
import {
  BASE_PROGRESS,
  PROFILE,
  TOPICS,
  computeTotals,
  computeWeakSpots,
} from '../../mocks/data';

const DashboardPage = () => {
  const totals = computeTotals(TOPICS, BASE_PROGRESS);
  const weakSpots = computeWeakSpots(TOPICS, BASE_PROGRESS);

  return (
    <div className="py-2">
      <WelcomeCard
        displayName={PROFILE.displayName}
        answered={totals.answered}
        total={totals.total}
        correct={totals.correct}
        wrong={totals.wrong}
      />

      <h2 className="mt-6 mb-3 text-base font-medium tracking-tight">Topics</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((topic) => (
          <TopicCard
            key={topic.slug}
            topic={topic}
            progress={BASE_PROGRESS[topic.slug] ?? { correct: 0, wrong: 0 }}
          />
        ))}
      </div>

      {weakSpots.length > 0 && (
        <>
          <h2 className="mt-6 mb-3 text-base font-medium tracking-tight">
            Weak spots
          </h2>
          <div className="space-y-2">
            {weakSpots.map(({ topic, progress }) => (
              <WeakSpotCard
                key={topic.slug}
                topic={topic}
                progress={progress}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
