import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const loginResponse = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log("login response: ", parsedResponse)
      if(parsedResponse.data === 'login successful'){
      }
        this.props.history.push('/account')
    } catch (err) {
      console.log(err);
    }
  }



  render(){

    return (
      <div>
        <h1>User Login</h1>
        <form onSubmit={this.handleSubmit}>
          Username:<br />
          <input type='text' name='username' onChange={this.handleChange}/><br />
          Password:<br />
          <input type='password' name='password' onChange={this.handleChange}/><br />
          <button type='sumbit'>Login</button><br />
        </form>
      </div>
      )
  }
}

export default Login;
