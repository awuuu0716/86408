import { React, useState, useEffect } from 'react';
import NavBootstrap from '../NavBootstrap'
import HomePage from '../../pages/HomePage';
import CheckReserve from '../../pages/CheckReserve';
import AdminMenu from '../../pages/AdminMenu';
import AdminReserve from '../../pages/AdminReserve';
import Reserve from '../../pages/Reserve';
import Menu from '../../pages/Menu';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Footer from '../Footer';
import { getMe } from '../../WebAPI';
import { getAuthToken } from '../../utils';
import { AuthContext } from '../../contexts';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (getAuthToken())
      getMe().then((response) => {
        if (response.ok) setUser(response.data);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <NavBootstrap />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/reserve">
            {user ? <Reserve /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/admin/menu">
            <AdminMenu />
          </Route>
          <Route exact path="/admin/reserve">
            <AdminReserve />
          </Route>
          <Route exact path="/reserve/user">
            <CheckReserve />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}
