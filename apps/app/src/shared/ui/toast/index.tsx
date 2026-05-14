import { Toast } from '@base-ui/react/toast';
import cn from 'clsx';
import { X } from 'lucide-react';
import type { ReactNode } from 'react';

const manager = Toast.createToastManager();

export const toast = {
  error: (title: string, description?: string) =>
    manager.add({ title, description, type: 'error', priority: 'high' }),
  success: (title: string, description?: string) =>
    manager.add({ title, description, type: 'success' }),
  info: (title: string, description?: string) => manager.add({ title, description }),
};

const rootClasses = cn(
  'pointer-events-auto w-full rounded-lg border bg-surface px-4 py-3 shadow-lg',
  'border-border',
  'data-[type=error]:border-danger data-[type=error]:bg-danger-bg',
  'data-[type=success]:border-success data-[type=success]:bg-success-bg',
  'transition-[opacity,transform] duration-200 ease-out',
  'data-[starting-style]:translate-x-4 data-[starting-style]:opacity-0',
  'data-[ending-style]:translate-x-4 data-[ending-style]:opacity-0',
);

const ToastList = () => {
  const { toasts } = Toast.useToastManager();
  return toasts.map((item) => (
    <Toast.Root key={item.id} toast={item} className={rootClasses}>
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <Toast.Title className="text-sm font-medium text-text" />
          <Toast.Description className="mt-0.5 text-sm text-text-muted" />
        </div>
        <Toast.Close
          aria-label="Dismiss"
          className="-m-1 shrink-0 cursor-pointer rounded p-1 text-text-subtle outline-none transition-colors hover:text-text focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X size={16} />
        </Toast.Close>
      </div>
    </Toast.Root>
  ));
};

export const Toaster = ({ children }: { children: ReactNode }) => (
  <Toast.Provider toastManager={manager}>
    {children}
    <Toast.Portal>
      <Toast.Viewport className="fixed right-4 top-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-2 outline-none">
        <ToastList />
      </Toast.Viewport>
    </Toast.Portal>
  </Toast.Provider>
);
