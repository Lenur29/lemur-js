import type { ComponentType } from 'react';

export const lazyRoute =
  (importPage: () => Promise<{ default: ComponentType }>) => () =>
    importPage().then((module) => ({ Component: module.default }));
