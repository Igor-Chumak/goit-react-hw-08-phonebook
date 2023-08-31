// import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { ISLOGGEDIN } from 'store';
/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = ISLOGGEDIN;

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
