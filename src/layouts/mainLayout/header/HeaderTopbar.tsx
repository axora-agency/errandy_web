import { UserMenu } from '@/components/custom/UserMenu';
import { NotificationMenu } from '@/components/custom/NotificationMenu';
import { SearchBox } from '@/components/custom/SearchBox';
import { AddressSelector } from '@/components/custom/AddressSelector';

const HeaderTopbar = () => {

  return (
    <div className="flex items-center gap-2 lg:gap-3.5 w-full">
      <div className="flex-1 xl:max-w-4xl">
        <SearchBox />
      </div>
      <div className="flex items-center gap-1 sm:gap-2 xl:gap-3.5">
        <AddressSelector />
        <NotificationMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export { HeaderTopbar };
