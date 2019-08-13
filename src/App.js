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
import EditUser from './EditUser';
import CreateReview from './Create Review';





class App extends Component {
  constructor(){
    super();
    this.state = ({
      loggedIn: false,
      userId: '',
      username: '',
      email: '',
      experiences: [],
      restaurantId: ''
    })
  }



  // sets user info in the global state of the app
  setUserInfo = (userData) => {
    // console.log("set user info hit: ")
    // console.log(userData)
    // userData.username

    this.setState({
      loggedIn: userData.loggedIn,
      username: userData.username,
      userId: userData.userId,
      email: userData.email,
      experiences: userData.experiences,
      restaurantId: userData.restaurantId
    })

  }

  // // Original Route for index component
  // <Route path="/index" component={ RestaurantList } />


// render all components that are in the router
  render(){
    console.log('global state', this.state);
    return (
      <main>
        <Header />
        <Switch>
          <Route path="/home" render={ (props) => <Home {...props} /> } />
          <Route path="/register" render={ (props) => <Register {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/login" render={ (props) => <Login {...props} setUserInfo={this.setUserInfo} /> } />
          <Route path="/index" render={ (props) => <RestaurantList {...props} appState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/account" render={ (props) => <Account {...props} appState={this.state} setUserInfo={this.setUserInfo} /> } />
          <Route path="/edit" render={ (props) => <EditUser {...props} setUserInfo={this.setUserInfo} appState={this.state} /> } />
          <Route path="/restaurantShow" component={ RestaurantShow } />
          <Route path="/createReview" render={ (props) => <CreateReview {...props} setUserInfo={this.setUserInfo} appState={this.state} /> } />

        </Switch>
      </main>
    );
  }
}

export default App;
