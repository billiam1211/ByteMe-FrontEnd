import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      userId: '',
      experiences: [],
      userCreated: false
    }
  }
  // this function updates the input fields to update state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  // this function calls the server for the login auth route
  handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log("login response: ", parsedResponse)
      const userInfo = {
        username: parsedResponse.data.username,
        password: parsedResponse.data.password,
        email: parsedResponse.data.email,
        experiences: parsedResponse.data.experiences,
        userId: parsedResponse.data._id,
        userCreated: true
      }
      this.props.setUserInfo(userInfo)
      this.props.history.push("/account");
    } catch (err) {
      console.log(err);
    }
  }



  render(){

    return (
      <div class="form">
        <h1 class="Home">User Login</h1>

        <form onSubmit={this.handleSubmit}>
          <h3>Username:</h3>
          <input type='text' name='username' onChange={this.handleChange}/>
          <h3>Password:</h3>
          <input type='password' name='password' onChange={this.handleChange}/>3
          <button type='submit'>Login</button>
        </form>
      </div>
      )
  }
}

export default Login;
