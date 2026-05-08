export type CodeBlockProps = {
  code: string;
};

const CodeBlock = ({ code }: CodeBlockProps) => (
  <pre className="overflow-x-auto rounded-md bg-surface-muted px-3 py-2.5 font-mono text-[12.5px] leading-relaxed whitespace-pre">
    {code}
  </pre>
);

export default CodeBlock;
