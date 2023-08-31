import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './SharedLayout.styled';
import { Loader, Navigation, UserMenu, AuthNav } from 'components';
import { ISLOGGEDIN } from 'store';

export const SharedLayout = () => {
  const isLoggedIn = ISLOGGEDIN;
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
