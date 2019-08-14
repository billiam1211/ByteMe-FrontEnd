import React, { Component } from 'react';




// this is the class for creating a review
class CreateReview extends Component {
  constructor(props){
    super();
    this.state = {
      title: '',
      review: '',
      rating: null,
      restaurantId: props.appState.restaurantId,
      restaurantName: props.appState.restaurantName
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

      const reviewResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/experiences', {
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
      this.props.history.push("/index");

    } catch (err) {
      console.log(err);
    }
  }

  handleClick1 = (e) => {
    console.log('hit submit1');
    this.setState({
      rating: 1
    })
  }
  handleClick2 = (e) => {
    this.setState({
      rating: 2
    })
}
  handleClick3 = (e) => {
    this.setState({
      rating: 3
    })
}
  handleClick4 = (e) => {
    this.setState({
      rating: 4
    })
}
  handleClick5 = (e) => {
    this.setState({
      rating: 5
    })
}


	render(){
    console.log(this.state);


		return(
			<div className="form">
				<h1 className="Home">Create A New Review</h1>

					<form onSubmit={this.handleSubmit}>

					<h3>Review Title: </h3> 
					<input type='text' name='title' onChange={this.handleChange}/>

          <h3>Rating: {this.state.rating} </h3> 
          <button type="button" onClick={this.handleClick1} className="ratingButton"><img className="star" alt="star" src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Gold-Star-PNG-Transparent-Image-500x500.png" /></button>
          <button type="button" onClick={this.handleClick2} className="ratingButton"><img className="star" alt="star" src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Gold-Star-PNG-Transparent-Image-500x500.png" /></button>
          <button type="button" onClick={this.handleClick3} className="ratingButton"><img className="star" alt="star" src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Gold-Star-PNG-Transparent-Image-500x500.png" /></button>
          <button type="button" onClick={this.handleClick4} className="ratingButton"><img className="star" alt="star" src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Gold-Star-PNG-Transparent-Image-500x500.png" /></button>
          <button type="button" onClick={this.handleClick5} className="ratingButton"><img className="star" alt="star" src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Gold-Star-PNG-Transparent-Image-500x500.png" /></button>

					<h3>Review: </h3>

					<textarea className="reviewBox" type='text' name='review' onChange={this.handleChange}/>

          <h5 className="Home">{this.state.msg}</h5>

					<button type='sumbit'>Submit Review</button><br />

				</form>
			</div>
	  )
	}

}



export default CreateReview;