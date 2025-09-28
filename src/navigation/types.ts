import type { ReactNode } from 'react';

export type Audience = 'client' | 'worker';

export type MenuItemBase = {
  id: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: number | (() => number | undefined);
  featureFlag?: string;
  roles?: Audience[]; // which audiences should see this
  disabled?: boolean;
  className?: string;
  // matching and visibility
  activeMatch?: 'default' | 'full' | 'startsWith';
  hidden?: boolean | (() => boolean);
};

export type LinkItem = MenuItemBase & {
  type: 'link';
  to: string; // internal or external
  external?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export type DropdownItem = MenuItemBase & {
  type: 'dropdown';
  children: MenuItem[];
};

export type SectionItem = MenuItemBase & {
  type: 'section';
};

export type DividerItem = MenuItemBase & {
  type: 'divider';
};

export type ActionItem = MenuItemBase & {
  type: 'action';
  onClick: () => void;
};

export type CustomItem = MenuItemBase & {
  type: 'custom';
  render: () => ReactNode;
};

export type MenuItem =
  | LinkItem
  | DropdownItem
  | SectionItem
  | DividerItem
  | ActionItem
  | CustomItem;

export type MenuConfig = MenuItem[];
