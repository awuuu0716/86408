import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/HomePage'
import Menu from '../../pages/Menu';
import Login from '../../pages/Login';
import Footer from '../../component/Footer';

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
      </Switch>
      <Footer />
    </Router>
  );
}
