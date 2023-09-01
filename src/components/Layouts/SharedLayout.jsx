import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader, Navigation, UserMenu, AuthNav, Header } from 'components';
// import { ISLOGGEDIN } from 'store';

export const SharedLayout = () => {
  const isLoggedIn = false; //ISLOGGEDIN;
  console.log('SharedLayout isLoggedIn :>> ', isLoggedIn);
  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
