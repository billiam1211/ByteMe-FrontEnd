import React, { Component } from 'react';


class EditUser extends Component {
	constructor(props){
		super();
		this.state = {
		  username: '',
		  password: '',
      confirmPassword: '',
		  email: ''
		}
	}

  // handles the change for filling in field in the searchbar
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

// this method will update the user account 
  updateUserAccount = async (e) => {
    e.preventDefault();
    console.log(this.props.appState.userId + ' <-------- userId');
    try {
	  console.log('inside try');
	  const id = this.props.appState.userId
	  console.log('step before fetch');
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/users/' + id, {
        method: 'PUT',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify({
        	username: this.state.username,
        	email: this.state.email,
        	password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        	experiences: [this.props.appState.experiences]
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log('step after fetch');
 		console.log(response);


      console.log();
      const parsedResponse = await response.json();
      console.log(" response: ", parsedResponse.data);


      const userInfo = {
        username: parsedResponse.data.username,
        password: parsedResponse.data.password,
        email: parsedResponse.data.email,
        userId: parsedResponse.data._id,
        experiences: this.props.appState.experiences,
        restaurantId: this.props.appState.restaurantId,
        restaurantName: this.props.appState.restaurantName
      }

      this.props.setUserInfo(userInfo)
      this.props.history.push("/account");

    } catch (err) {
      console.log(err);
    }
  }


	render(){
		return(
			<div class="form">
				<h1 class="Home">Edit Account:</h1>
					<form onSubmit={this.updateUserAccount}>
					<h3>Username: </h3> 
					<input type='text' name='username' onChange={this.handleChange}/>
					<h3>Password:</h3>
					<input type='password' name='password' onChange={this.handleChange}/>
					<h3>Confirm password: </h3>
					<input type='password' name='confirmPassword' onChange={this.handleChange}/>
					<h3>Email: </h3>
					<input type='text' name='email' onChange={this.handleChange}/><br /> <br />
					<button type='sumbit'>Submit Changes</button><br />
				</form>
			</div>
	  )
	}

}






export default EditUser;