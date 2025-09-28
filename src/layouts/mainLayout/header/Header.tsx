import clsx from "clsx";
import { Container } from "@/components/container";
import { MegaMenu } from "../mega-menu";
import { HeaderLogo, HeaderTopbar } from "./";

const Header = () => {

  return (
    <header
      className={clsx(
        "header  z-10 start-0 end-0 flex items-stretch shrink-0 py-3 bg-background"
      )}
    >
      <Container className="flex items-center lg:gap-4 w-full justify-between md:justify-normal">
        <HeaderLogo />
        {/* {pathname.includes('/account') ? <Breadcrumbs /> : <MegaMenu />} */}
        <MegaMenu />

        <div className="sm:flex hidden">
          <HeaderTopbar />
        </div>
      </Container>
    </header>
  );
};

export { Header };
