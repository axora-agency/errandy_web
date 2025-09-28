/* eslint-disable react-hooks/exhaustive-deps */
import { useResponsive } from '@/hooks';
import { MegaMenuInner } from '.';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  if (desktopMode) {
    return <MegaMenuInner mode="desktop" />;
  } else {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <MenuIcon className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className="border-0 p-0 w-[225px] scrollable-y-auto"
          forceMount={true}
          side="left"
          // close={false}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Mobile Menu</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <MegaMenuInner mode="mobile" />
        </SheetContent>
      </Sheet>
    );
  }
};

export { MegaMenu };
