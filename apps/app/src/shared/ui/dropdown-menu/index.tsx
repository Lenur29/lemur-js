import { Menu } from '@base-ui/react/menu';
import cn from 'clsx';

const Content = ({ children, className, ...rest }: Menu.Popup.Props) => (
  <Menu.Portal>
    <Menu.Positioner sideOffset={8}>
      <Menu.Popup
        className={cn(
          'min-w-[10rem] overflow-hidden rounded-md border border-border bg-surface p-1 shadow-lg',
          'origin-[var(--transform-origin)] transition duration-150 ease-out',
          'data-[starting-style]:scale-95 data-[starting-style]:opacity-0',
          'data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
          className,
        )}
        {...rest}
      >
        {children}
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
);

const Item = ({ className, ...rest }: Menu.Item.Props) => (
  <Menu.Item
    className={cn(
      'flex h-8 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm outline-none transition-colors',
      'data-[highlighted]:bg-surface-muted',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...rest}
  />
);

const LinkItem = ({ className, ...rest }: Menu.LinkItem.Props) => (
  <Menu.LinkItem
    className={cn(
      'flex h-8 cursor-pointer items-center gap-2 rounded-sm px-2 text-sm text-text no-underline outline-none transition-colors',
      'data-[highlighted]:bg-surface-muted',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...rest}
  />
);

const Separator = ({ className, ...rest }: Menu.Separator.Props) => (
  <Menu.Separator
    className={cn('my-1 h-px bg-border', className)}
    {...rest}
  />
);

const DropdownMenu = {
  Root: Menu.Root,
  Trigger: Menu.Trigger,
  Content,
  Item,
  LinkItem,
  Separator,
};

export default DropdownMenu;
