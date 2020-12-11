import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/HomePage'
import AdminMenu from '../../pages/AdminMenu';
import AdminReserve from '../../pages/AdminReserve';
import Reserve from '../../pages/Reserve';
import Menu from '../../pages/Menu';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Footer from '../Footer';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
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
          <Reserve />
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
      </Switch>
      <Footer />
    </Router>
  );
}
