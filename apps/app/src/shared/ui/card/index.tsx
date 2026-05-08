import { mergeProps } from '@base-ui/react/merge-props';
import { useRender } from '@base-ui/react/use-render';

export type CardProps = useRender.ComponentProps<'div'>;

const Card = ({ render, ...rest }: CardProps) => {
  const defaults: useRender.ElementProps<'div'> = {
    className:
      'rounded-lg border border-border bg-surface p-6 transition-colors',
  };

  return useRender({
    defaultTagName: 'div',
    render,
    props: mergeProps<'div'>(defaults, rest),
  });
};

export default Card;
