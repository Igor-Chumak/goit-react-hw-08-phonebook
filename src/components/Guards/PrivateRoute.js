import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

//  - If the route is private and the user is logged in, render the component
//  - Otherwise render <Navigate> to redirectTo

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  console.log(
    `PrivateRoute shouldRedirect >> isLoggedIn:${isLoggedIn} && isRefreshing:${isRefreshing} = shouldRedirect`
  );

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};