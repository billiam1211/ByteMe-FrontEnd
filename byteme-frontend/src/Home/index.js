import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../Login'



const Home = () => {

  return (
      <div>
        <div class="centerForm">
          <h1 class="Home">Welcome to Chicago Bytes!</h1><br/><br/>
          <h3>Chicago Bytes is the best online source to 
          find a great dining option in the city of Chicago.
          Thousands of options are available from local 
          hotspots, with reviews from our site members! 
          </h3><br/><br/>
        </div>
      </div>

    )
}






export default Home;