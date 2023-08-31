import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'store';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loader, SharedLayout } from 'components';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
Notify.init({
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  timeout: '2000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  closeButton: true,
  opacity: 1,
  warning: {
    background: '#df120b',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.466)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
        </Route>
      </Routes>
      {isLoading && <Loader />}
      {error && Notify.warning(error)}
    </>
  );
};
