import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { APP_ROUTES } from './utils/constants';
import { useUser } from './lib/customHooks';


import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { Home } from './pages/Home/Home';
import { PersonalSpace } from './pages/PersonalSpace/PersonalSpace';
import { SignIn } from './pages/SignIn/SignIn';

export const Router = () => {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <BrowserRouter>
        <Header user={user} setUser={setUser}/>
        <Routes>
          <Route index element={<Home />} />
          <Route path={APP_ROUTES.SIGN_IN} element={<SignIn setUser={setUser} />} />
          <Route path={APP_ROUTES.PERSONAL_SPACE} element={<PersonalSpace />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
};