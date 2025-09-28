import { UserMenu } from '@/components/custom/UserMenu';
import { NotificationMenu } from '@/components/custom/NotificationMenu';
import { SearchBox } from '@/components/custom/SearchBox';

const HeaderTopbar = () => {

  return (
    <div className="flex items-center gap-2 lg:gap-3.5 w-full">
      <SearchBox />
      <div className="flex items-center gap-2 lg:gap-3.5">
        <NotificationMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export { HeaderTopbar };
