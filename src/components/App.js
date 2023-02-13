import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MutatingDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from 'redux/auth/operations';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegistrationPage = lazy(() =>
  import('../pages/Registration/Registration')
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <MutatingDots
          height="100"
          width="100"
          color="yellow"
          secondaryColor="blue"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="registration"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsPage />}
                />
              }
            />
          </Route>
        </Routes>
      )}
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
