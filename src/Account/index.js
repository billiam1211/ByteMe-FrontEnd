import React, { Component } from 'react';



// Component for user accounts and will show user information
// Component will also contain 2 functions that will handle edit account and delete account
class Account extends Component {
	constructor(props){
		super();
		this.state = ({
			experiences: []
		})

	}

	// UPON PAGE RENDER AUTOMATICALLLY POPULATES THE USERS ACTIVE REVIEWS
	componentDidMount(){
		this.getUserReviews(this.props.appState.userId)
	}

	// GETS THE REVIEWS FOR THE LOGGED IN USER
	getUserReviews = async (id) => {
		const loggedUserId = id
		try{

	const reviewResponse = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/v1/users/${loggedUserId}`, {
	    	method: 'GET', 
	    	credentials: 'include',
	    	headers: {
	        	'Content-Type': 'application/json'
	    	}
		})
		const parsedResponse = await reviewResponse.json();
		console.log('reviews from db ===> ', parsedResponse);

		const userData = {
			loggedIn: this.props.appState.loggedIn,
			username: this.props.appState.username,
			userId: this.props.appState.userId,
			email: this.props.appState.email,
			experiences: parsedResponse.data.experiences,
			restaurantId: this.props.appState.restaurantId,
			restaurantName: this.props.appState.restaurantName
		}

		this.props.setUserInfo(userData)



		}catch(err){
		  console.log(err);
			}
	}




	// this method will log out the user and destroy the session
	handleLogout = async (e) => {
		console.log('this is the handle logout method');
		e.preventDefault();
		try {
	        const logoutUser = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/auth/logout', {
	          method: 'DELETE',
	          credentials: 'include'
        });
        console.log('user logged out');

        // reset global state to blank status
        const userInfo = {
			loggedIn: false,
			userId: '',
			username: '',
			email: '',
			experiences: []
        }

        this.props.setUserInfo(userInfo)
        console.log(this.props.appState);

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
	        const deleteUser = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/users/' +  id, {
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
		console.log(this.props.appState);

		if(this.props.appState.loggedIn === true && this.props.appState.experiences !== undefined){
			const userExperiences = this.props.appState.experiences.map((experience, i) => {
				console.log(experience);
			return (
				<div>
					<li className="reviewContainer" key={i}>
						<div className="reviewChunk">
							{ experience.restaurantname }  <br />
							RATING: { experience.rating } stars<br />
							{ experience.username }<br />
						</div>
						<div className="reviewChunk">
							{ experience.title }  <br />
						</div>
						<div className="reviewChunk">
							{ experience.review } <br />
						</div>
					</li>
				</div>
			)
			})



			return(
				<div className="form">
					<h1 className="Home">My Account</h1>
					<h3>Username: {this.props.appState.username}</h3><br /> 
					<h3>Email: {this.props.appState.email}</h3><br />
					<h3>UserId: {this.props.appState.userId}</h3><br />
					<h1 className="Home">My Reviews</h1>
					<ul className="reviews">
							{ userExperiences }
					</ul>
					<button onClick={this.handleEdit}>Edit Account</button><br />
					<button onClick={this.handleDelete}>Delete</button><br />
					<button onClick={this.handleLogout}>Log Out</button><br />
				</div>
				)
		} else {
			return(
				<div className="form">
					<h1 className="Home">My Account</h1><br />
					<h3>ERROR: Please log in to view account.</h3>
				</div>
				)
		}

	}


}







export default Account;