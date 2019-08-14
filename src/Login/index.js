import React, { Component } from 'react';



class Login extends Component {
  constructor(props){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      userId: '',
      experiences: [],
      msg: ''
    }
  }
  // this function updates the input fields to update state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  // this function calls the server for the login auth route
  handleSubmit = async (e) => {
    console.log('handleSubmit function hit');
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
      console.log(parsedResponse.status);


      if(parsedResponse.status === 200){
        // if login response comes back successful, then log user in
        const userInfo = {
          username: parsedResponse.data.username,
          password: parsedResponse.data.password,
          email: parsedResponse.data.email,
          experiences: parsedResponse.data.experiences,
          userId: parsedResponse.data._id,
          loggedIn: true
        }

        this.props.setUserInfo(userInfo)
        this.props.history.push("/account");
      } else {
        // if login response comes back false, send error message
        this.setState({
          msg: parsedResponse.msg
        })
      }



    } catch (err) {
      console.log(err);
    }
  }



  render(){

    return (
      <div className="form">
        <h1 className="Home">User Login</h1>

        <form onSubmit={this.handleSubmit}>
          <h3>Username:</h3>
          <input type='text' name='username' onChange={this.handleChange}/>
          <h3>Password:</h3>
          <input type='password' name='password' onChange={this.handleChange}/>3
          <h5 className="Home">{this.state.msg}</h5>
          <button type='submit'>Login</button>
        </form>
      </div>
      )
  }
}

export default Login;
