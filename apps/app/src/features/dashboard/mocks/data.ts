export type Topic = {
  slug: string;
  title: string;
  description: string;
  total: number;
};

export type TopicProgress = {
  correct: number;
  wrong: number;
};

export const TOPICS: Topic[] = [
  {
    slug: 'closures',
    title: 'Closures & scope',
    description: 'Lexical environments, IIFEs, closure pitfalls',
    total: 30,
  },
  {
    slug: 'promises',
    title: 'Promises & async/await',
    description: 'Microtasks, error handling, parallel vs sequential',
    total: 28,
  },
  {
    slug: 'this-binding',
    title: 'The "this" keyword',
    description: 'Binding rules, arrow functions, call/apply/bind',
    total: 24,
  },
  {
    slug: 'event-loop',
    title: 'Event loop',
    description: 'Call stack, microtasks, macrotasks, render cycle',
    total: 20,
  },
  {
    slug: 'prototypes',
    title: 'Prototypes & inheritance',
    description: 'Prototype chain, Object.create, ES6 classes',
    total: 26,
  },
  {
    slug: 'type-coercion',
    title: 'Type coercion',
    description: '== vs ===, falsy values, common gotchas',
    total: 22,
  },
  {
    slug: 'es6',
    title: 'ES6+ features',
    description:
      'Destructuring, spread, optional chaining, nullish coalescing',
    total: 32,
  },
  {
    slug: 'hoisting',
    title: 'Hoisting & TDZ',
    description: 'var/let/const, function declarations, temporal dead zone',
    total: 18,
  },
  {
    slug: 'memory',
    title: 'Memory & garbage collection',
    description: 'References, leaks, weak collections',
    total: 14,
  },
  {
    slug: 'modules',
    title: 'Modules',
    description: 'CommonJS vs ESM, dynamic imports, tree-shaking',
    total: 16,
  },
  {
    slug: 'errors',
    title: 'Error handling',
    description: 'try/catch, async errors, custom error classes',
    total: 12,
  },
  {
    slug: 'iterators',
    title: 'Iterators & generators',
    description: 'Iterable protocol, yield, infinite sequences',
    total: 18,
  },
];

export const TOPICS_BY_SLUG: Record<string, Topic> = Object.fromEntries(
  TOPICS.map((topic) => [topic.slug, topic]),
);

export const BASE_PROGRESS: Record<string, TopicProgress> = {
  closures: { correct: 8, wrong: 4 },
  promises: { correct: 6, wrong: 5 },
  'this-binding': { correct: 3, wrong: 3 },
  'event-loop': { correct: 2, wrong: 2 },
  prototypes: { correct: 6, wrong: 2 },
  'type-coercion': { correct: 3, wrong: 3 },
};

export const PROFILE = {
  displayName: 'Lenur',
  initials: 'L',
};

export const computeTotals = (
  topics: Topic[],
  progressBySlug: Record<string, TopicProgress>,
) => {
  let total = 0;
  let correct = 0;
  let wrong = 0;
  for (const topic of topics) {
    total += topic.total;
    const progress = progressBySlug[topic.slug];
    if (progress) {
      correct += progress.correct;
      wrong += progress.wrong;
    }
  }
  return { total, correct, wrong, answered: correct + wrong };
};

export const computeWeakSpots = (
  topics: Topic[],
  progressBySlug: Record<string, TopicProgress>,
) => {
  return topics
    .map((topic) => ({
      topic,
      progress: progressBySlug[topic.slug] ?? { correct: 0, wrong: 0 },
    }))
    .filter((entry) => entry.progress.wrong > 0)
    .sort((a, b) => b.progress.wrong - a.progress.wrong)
    .slice(0, 5);
};
