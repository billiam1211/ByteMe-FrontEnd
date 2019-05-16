import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


// Component for user accounts and will show user information
// Component will also contain 2 functions that will handle edit account and delete account
class Account extends Component {
	constructor(props){
		super();
	}


	// this method will log out the user and destroy the session
	handleLogout = async (e) => {
		console.log('this is the handle logout method');
		e.preventDefault();
		try {
	        const logoutUser = await fetch('http://localhost:9000/api/v1/auth/logout', {
	          method: 'DELETE',
	          credentials: 'include'
        });
        console.log('user logged out');
      	this.props.history.push("/home");
		} catch(err) {
			console.log(err, 'error');
		}

	}

	// this method will allow the user to edit account information 
	handleEdit = (e) => {
		console.log('this is takes user to edit page');
      	this.props.history.push("/edit");

	}


	// this method will handle the delete user route, need to pass the user id here as an argument
	handleDelete = async (e) => {
		console.log('hit delete user method');
		console.log(this.props.appState.userId);
		const id = this.props.appState.userId
		e.preventDefault();
		try {
	        const deleteUser = await fetch('http://localhost:9000/api/v1/users/' +  id, {
	          method: 'DELETE',
	          credentials: 'include'
        });
        console.log('user with id ' + id + ' should be deleted')
      	this.props.history.push("/home");

		} catch(err) {
			console.log(err, 'error');
		}
	}





	render(){
		return(
			<div class="form">
				<h1 class="Home">Account Info </h1>

					<h3>Username: {this.props.appState.username}</h3><br /> 
					<h3>Email: {this.props.appState.email}</h3><br />
					<h3>UserId: {this.props.appState.userId}</h3><br />
					<h3>Experiences: {this.props.appState.experiences}</h3><br />
					<button onClick={this.handleEdit}>Edit Account</button><br />
        			<button onClick={this.handleDelete}>Delete</button><br />
        			<button onClick={this.handleLogout}>Log Out</button><br />


			</div>
			)
	}


}







export default Account;