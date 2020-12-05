import React from 'react';
import Header from '../Header';
import HomePage from '../../pages/HomePage'
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
      </Switch>
      <Footer />
    </Router>
  );
}
