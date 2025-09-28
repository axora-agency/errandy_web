import { HeaderNav } from '@/navigation';
import { useUserStore } from '@/store/userStore';

interface Props {
  mode?: 'desktop' | 'mobile';
}

const MegaMenuInner = ({ mode = 'desktop' }: Props) => {
  const { user } = useUserStore();
  const audience = user?.activeRole === 'WORKER' ? 'worker' : 'client';
  return <HeaderNav audience={audience} mode={mode} />;
};

export { MegaMenuInner };
