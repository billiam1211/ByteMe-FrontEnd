import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Header from './Header';
import RestaurantList from './RestaurantList';
import AccountShow from './AccountShow'


function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/register" component={ Register } />
        <Route path="/login" component={ Login } />
        <Route path="/index" component={ RestaurantList } />
        <Route path="/account" component={ AccountShow } />
      </Switch>
    </main>
  );
}

export default App;
