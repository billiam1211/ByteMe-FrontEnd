import React, { Component } from 'react';


// this is the class for registering a new user 
class Register extends Component {
  constructor(props){
    console.log(props);
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      userId: '',
      msg: ''
    }
  }


// method that handles change in the input fields and updates state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


// method that handles the submit on the form
// calls the API and uses POST to create a new user and post it to the DB
// will then need to update the global state with the new user information 
// switched the user to the current user and also logged in
// Use the react redirect feature to then transition to the Account page
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {

      const registerResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/users', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(registerResponse);
      const parsedResponse = await registerResponse.json();
      console.log("Register response: ", parsedResponse);
      // parsedResponse has form: 
      // {status: 200, data:...}
      // data looks like this: 
      // email: "asdffskjf;laksjf@gmail.com"
      // experiences: []
      // password: "$2a$10$sEORcqtN3i9tvHo600hJuuG0UI62X8t4BSA62dKeI61c6YniF43s2"
      // username: "nate"
      // __v: 0
      // _id: "5cdda047c83f93b199a4927b"
      // use this.props.setUserInfo(....) passing in user data in order to set state for top-level App component 


      // On successful account creation, bring user to account page
      if(parsedResponse.status === 200) {
        const userInfo = {
          loggedIn: true,
          username: parsedResponse.data.username,
          password: parsedResponse.data.password,
          email: parsedResponse.data.email,
          userId: parsedResponse.data._id,
          msg: parsedResponse.data.msg
        }
        this.props.setUserInfo(userInfo)
        this.props.history.push("/account");
      } else {
        // if there are any errors, display error message
        this.setState({
          msg: 'Unable to create account. Please check username or password and try again'
        })
      }


    } catch (err) {
      console.log(err);
    }
  }


	render(){
		return(
			<div className="form">
				<h1 className="Home">Create New Account</h1>

					<form onSubmit={this.handleSubmit}>

					<h3>Username: </h3> 
					<input type='text' name='username' onChange={this.handleChange}/>

					<h3>Password:</h3>
					<input type='password' name='password' onChange={this.handleChange}/>

					<h3>Confirm password: </h3>
					<input type='password' name='confirmPassword' onChange={this.handleChange}/>

					<h3>Email: </h3>
					<input type='text' name='email' onChange={this.handleChange}/>

          <h5 className="Home">{this.state.msg}</h5>

					<button type='sumbit'>Submit</button><br />

				</form>
			</div>
	  )
	}

}



export default Register;