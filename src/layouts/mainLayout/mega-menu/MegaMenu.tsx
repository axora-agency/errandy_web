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

const MegaMenu = () => {
  const desktopMode = useResponsive('up', 'lg');
  if (desktopMode) {
    return <MegaMenuInner />;
  } else {
    return (
      <Sheet>
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
          <MegaMenuInner />
        </SheetContent>
      </Sheet>
    );
  }
};

export { MegaMenu };
