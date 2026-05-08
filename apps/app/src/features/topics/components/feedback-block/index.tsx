export type FeedbackBlockProps = {
  correctAnswer: string;
  explanation: string | undefined;
};

const FeedbackBlock = ({ correctAnswer, explanation }: FeedbackBlockProps) => (
  <div className="mt-3 rounded-md bg-surface-muted px-3 py-2.5 text-sm leading-relaxed">
    <span className="font-medium text-success">Correct answer:</span>{' '}
    {correctAnswer}
    {explanation && <div className="mt-1.5 text-text-muted">{explanation}</div>}
  </div>
);

export default FeedbackBlock;
