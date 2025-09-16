import clsx from "clsx";
import { Container } from "@/components/container";
import { MegaMenu } from "../mega-menu";
import { HeaderLogo, HeaderTopbar } from "./";

const Header = () => {
  // const { headerSticky } = useDemo1Layout();
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (headerSticky) {
  //     document.body.setAttribute('data-sticky-header', 'on');
  //   } else {
  //     document.body.removeAttribute('data-sticky-header');
  //   }
  // }, [headerSticky]);

  return (
    <header
      className={clsx(
        "header  z-10 start-0 end-0 flex items-stretch shrink-0 py-3 bg-background"
      )}
    >
      <Container className="flex items-center lg:gap-4 w-full">
        <HeaderLogo />
        {/* {pathname.includes('/account') ? <Breadcrumbs /> : <MegaMenu />} */}
        <MegaMenu />

        <div className="ml-auto">
          <HeaderTopbar />
        </div>
      </Container>
    </header>
  );
};

export { Header };
