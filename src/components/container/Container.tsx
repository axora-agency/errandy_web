import clsx from 'clsx';
import { type ReactNode } from 'react';
import type { TSettingsContainer } from '@/config';

export interface TPageContainerProps {
  children?: ReactNode;
  width?: TSettingsContainer;
  className?: string;
}

const Container = ({ children, width, className = '' }: TPageContainerProps) => {
  const widthMode = width ?? 'fixed';

  return (
    <div className={clsx(className, widthMode === 'fixed' ? 'container-fixed' : 'container-fluid')}>
      {children}
    </div>
  );
};

export { Container };
