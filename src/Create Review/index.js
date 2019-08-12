import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



// this is the class for creating a review
class CreateReview extends Component {
  constructor(props){
    console.log(props);
    super();
    this.state = {
      title: '',
      review: '',
      rating: null
    }
  }


// method that handles change in the input fields and updates state
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


// function to send post request to back end to create a new restaurant review
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {

      const reviewResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/', {
        method: 'POST',
        credentials: 'include',// on every request we have to send the cookie
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(reviewResponse);
      const parsedResponse = await reviewResponse.json();
      console.log("Review response: ", parsedResponse);



    } catch (err) {
      console.log(err);
    }
  }


	render(){
		return(
			<div className="form">
				<h1 className="Home">Create A New Review</h1>

					<form onSubmit={this.handleSubmit}>

					<h3>Review Title: </h3> 
					<input type='text' name='title' onChange={this.handleChange}/>

          <h3>Rating: </h3> 
          <input type='text' name='rating' onChange={this.handleChange}/>

					<h3>Review: </h3>
					<textarea type='text' name='review' onChange={this.handleChange}/>

          <h5 className="Home">{this.state.msg}</h5>

					<button type='sumbit'>Submit</button><br />

				</form>
			</div>
	  )
	}

}



export default CreateReview;