import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn';
import { Home } from './pages/Home/Home';
import { APP_ROUTES } from './utils/constants';
import { useUser } from './lib/customHooks';

export const Router = () => {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={APP_ROUTES.SIGN_IN} element={<SignIn setUser={setUser} />} />
        </Routes>
    </BrowserRouter>
  );
};