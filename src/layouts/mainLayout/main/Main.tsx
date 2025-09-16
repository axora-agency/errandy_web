import { Fragment } from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from '../';

const Main = () => {


  return (
    <Fragment>
      {/* <Sidebar /> */}

      <div className="wrapper flex grow flex-col container mx-auto px-5">
        <Header />

        <main className="grow content pt-5" role="content">
          <Outlet />
        </main>

        <Footer />
      </div>
    </Fragment>
  );
};

export { Main };
