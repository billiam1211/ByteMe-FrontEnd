import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login';
import Register from './Register'
import Header from './Header';
import RestaurantList from './RestaurantList';
import Account from './Account'
import RestaurantShow from './RestaurantShow'
import Button from 'react-bootstrap/Button';


class App extends Component {
  constructor(){
    super();
    this.state = ({
      loggedIn: false,
      userId: '',
      username: '',
      email: '',
      experiences: []
    })
  }



// sets user info in the global state of the app
// I'm not exactly sure how this will be called and updated
// by other componenets in the application
  setUserInfo = (userData) => {

    // console.log("set user info hit: ")
    // console.log(userData)

    // userData.username

    this.setState({
      loggedIn: true,
      username: userData.username,
      userId: userData.userId,
      email: userData.email,
      experiences: userData.experiences
    })
    console.log("App comp state: ")
    console.log(this.state)
  }

// render all components that are in the router
  render(){
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/home" component={ Home } />
          <Route path="/register" render={ (props) => <Register {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/login" render={ (props) => <Login {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/index" component={ RestaurantList } />
          <Route path="/account" render={ (props) => <Account {...props} appState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/restaurantShow" component={ RestaurantShow } />
        </Switch>
      </main>
    );
  }
}

// replace component={ NAME } w/ 
// render={ (props) => < NAME {...props} newProp={this.newProp} /> }

export default App;
