import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Error from '../pages/Error';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';
const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component}></Route>
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component}></Route>
      ))}
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
