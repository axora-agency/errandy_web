import type { Audience } from './types';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { clientHeaderNav, workerHeaderNav } from '@/config/menu.config';

interface HeaderNavProps {
  audience: Audience;
  mode?: 'desktop' | 'mobile';
}

export const HeaderNav = ({ audience, mode = 'desktop' }: HeaderNavProps) => {
  const config = audience === 'worker' ? workerHeaderNav : clientHeaderNav;
  if (mode === 'mobile') {
    return <MobileNav audience={audience} items={config} />;
  }
  return <DesktopNav audience={audience} items={config} />;
};
