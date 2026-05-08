import Card from '@/shared/ui/card';

import type { Attempt, Question } from '../../mocks/questions';
import CodeBlock from '../code-block';
import FeedbackBlock from '../feedback-block';
import OptionButton from '../option-button';

export type QuestionCardProps = {
  question: Question;
  number: number;
  attempt: Attempt | undefined;
  onAnswer: (pickedIndex: number) => void;
};

const QuestionCard = ({
  question,
  number,
  attempt,
  onAnswer,
}: QuestionCardProps) => {
  const correctAnswer = question.options[question.correctIndex];

  return (
    <Card className="mb-3 p-5">
      <p className="mb-1.5 text-xs font-medium text-text-subtle">
        Question {number}
      </p>
      <p className="mb-3 text-[15px] font-medium leading-relaxed">
        {question.text}
      </p>
      {question.code && (
        <div className="mb-3.5">
          <CodeBlock code={question.code} />
        </div>
      )}
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => {
          let state: 'default' | 'correct' | 'wrong' = 'default';
          if (attempt) {
            if (index === question.correctIndex) state = 'correct';
            else if (index === attempt.pickedIndex) state = 'wrong';
          }
          return (
            <OptionButton
              key={option}
              label={option}
              state={state}
              disabled={Boolean(attempt)}
              onClick={() => onAnswer(index)}
            />
          );
        })}
      </div>
      {attempt && !attempt.isCorrect && correctAnswer && (
        <FeedbackBlock
          correctAnswer={correctAnswer}
          explanation={question.explanation}
        />
      )}
    </Card>
  );
};

export default QuestionCard;
