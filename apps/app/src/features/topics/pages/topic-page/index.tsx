import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';

import { RoutePath } from '@/core/router/constants';

import {
  BASE_PROGRESS,
  TOPICS_BY_SLUG,
  type TopicProgress,
} from '@/features/dashboard/mocks/data';

import Button from '@/shared/ui/button';

import QuestionCard from '../../components/question-card';
import TopicHeader from '../../components/topic-header';
import { type Attempt, QUESTIONS } from '../../mocks/questions';

const CHUNK_SIZE = 5;

const TopicPage = () => {
  const { topicSlug = '' } = useParams<{ topicSlug: string }>();
  const topic = TOPICS_BY_SLUG[topicSlug];
  const allQuestions = useMemo(() => QUESTIONS[topicSlug] ?? [], [topicSlug]);

  const [attempts, setAttempts] = useState<Record<string, Attempt>>({});
  const [visible, setVisible] = useState(CHUNK_SIZE);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return allQuestions;
    return allQuestions.filter(
      (question) =>
        question.text.toLowerCase().includes(query) ||
        question.code?.toLowerCase().includes(query),
    );
  }, [allQuestions, search]);

  if (!topic) {
    return (
      <div className="py-2">
        <Link
          to={RoutePath.Dashboard}
          className="mb-3 inline-flex items-center gap-1 text-[13px] text-text-muted transition-colors hover:text-text"
        >
          ← Dashboard
        </Link>
        <div className="rounded-md bg-surface-muted py-8 text-center text-sm text-text-muted">
          Topic not found.
        </div>
      </div>
    );
  }

  const baseProgress: TopicProgress = BASE_PROGRESS[topicSlug] ?? {
    correct: 0,
    wrong: 0,
  };
  const sessionDelta = Object.values(attempts).reduce(
    (delta, attempt) => {
      if (attempt.isCorrect) delta.correct += 1;
      else delta.wrong += 1;
      return delta;
    },
    { correct: 0, wrong: 0 },
  );
  const correct = baseProgress.correct + sessionDelta.correct;
  const wrong = baseProgress.wrong + sessionDelta.wrong;

  const isSearching = search.trim().length > 0;
  const visibleQuestions = isSearching ? filtered : filtered.slice(0, visible);

  const handleAnswer = (questionId: string, pickedIndex: number) => {
    if (attempts[questionId]) return;
    const question = allQuestions.find((q) => q.id === questionId);
    if (!question) return;
    setAttempts((prev) => ({
      ...prev,
      [questionId]: {
        pickedIndex,
        isCorrect: pickedIndex === question.correctIndex,
      },
    }));
  };

  return (
    <div className="py-2">
      <Link
        to={RoutePath.Dashboard}
        className="mb-3 inline-flex items-center gap-1 text-[13px] text-text-muted transition-colors hover:text-text"
      >
        ← Dashboard
      </Link>

      <TopicHeader
        title={topic.title}
        description={topic.description}
        total={topic.total}
        correct={correct}
        wrong={wrong}
      />

      {allQuestions.length > 0 && (
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search questions…"
          className="my-4 h-9 w-full rounded-md border border-border bg-surface px-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-text-subtle focus:shadow-[0_0_0_3px_oklch(55%_0.2_265/0.12)]"
        />
      )}

      {visibleQuestions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          number={index + 1}
          attempt={attempts[question.id]}
          onAnswer={(pickedIndex) => handleAnswer(question.id, pickedIndex)}
        />
      ))}

      {allQuestions.length === 0 ? (
        <div className="mt-4 rounded-md bg-surface-muted py-8 text-center text-sm text-text-muted">
          No questions seeded for this topic in the prototype yet.
        </div>
      ) : isSearching ? (
        filtered.length === 0 ? (
          <div className="rounded-md bg-surface-muted py-8 text-center text-sm text-text-muted">
            No questions match "{search}".
          </div>
        ) : (
          <div className="py-4 text-center text-xs text-text-subtle">
            {filtered.length} match{filtered.length === 1 ? '' : 'es'} · search
            active
          </div>
        )
      ) : visible < allQuestions.length ? (
        <Button
          variant="secondary"
          size="md"
          className="w-full"
          onClick={() => setVisible((v) => v + CHUNK_SIZE)}
        >
          Load more questions ({allQuestions.length - visible} remaining)
        </Button>
      ) : (
        <div className="py-4 text-center text-xs text-text-subtle">
          You've reached the end · {allQuestions.length} of{' '}
          {allQuestions.length} questions
        </div>
      )}
    </div>
  );
};

export default TopicPage;
