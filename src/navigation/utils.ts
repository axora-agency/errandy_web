import { matchPath } from 'react-router-dom';
import type { Audience, MenuItem } from './types';

export const isVisible = (
  item: MenuItem,
  audience: Audience,
  hasFlag?: (flag: string) => boolean
) => {
  if (typeof item.hidden === 'function' && item.hidden()) return false;
  if (item.hidden === true) return false;
  if (item.roles && !item.roles.includes(audience)) return false;
  if (item.featureFlag && hasFlag && !hasFlag(item.featureFlag)) return false;
  return true;
};

export const getBadge = (item: MenuItem): number | undefined => {
  if (typeof item.badge === 'function') return item.badge() ?? undefined;
  return item.badge;
};

export const isActivePath = (
  pathname: string,
  to?: string,
  mode?: 'default' | 'full' | 'startsWith'
) => {
  if (!to) return false;
  if (mode === 'startsWith') {
    return !!matchPath({ path: to, end: false }, pathname);
  }
  const end = mode === 'full' ? false : true;
  return !!matchPath({ path: to, end }, pathname);
};
