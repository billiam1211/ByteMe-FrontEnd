import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



class Register extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      userCreated: false
    }
  }



  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }



  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      
      const registerResponse = await fetch('http://localhost:9000/api/v1/users', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(registerResponse);
      const parsedResponse = await registerResponse.json();
      console.log("Register response: ", parsedResponse)
      this.setState.userCreated = true;
      //this redirects from Register to login
      this.props.history.push('/login')
    } catch (err) {
      console.log(err);
    }
  }


	render(){

		return(
			<div>
				<h1>Register New User:</h1>
					<form onSubmit={this.handleSubmit}>
					Username: <br /> 
					<input type='text' name='username' onChange={this.handleChange}/><br />
					Password:<br />
					<input type='password' name='password' onChange={this.handleChange}/><br />
					Confirm password:<br />
					<input type='password' name='password' onChange={this.handleChange}/><br />
					Email:<br />
					<input type='text' name='email' onChange={this.handleChange}/><br />
					<button type='sumbit'>Submit</button><br />
				</form>
			</div>
	  )
	}

}



export default Register;