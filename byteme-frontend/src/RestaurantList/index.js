import React, { Component } from 'react';

class RestaurantList extends Component {
  constructor(){
    super();
    this.state = {
      restaurantList: null,
      cuisine: null 
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  handleSubmit = async (e) => {
    e.preventDefault();
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);

    try {
      const indexResponse = await fetch(`http://localhost:9000/restaurants/${this.state.cuisine}`, {
        method: 'GET',
        credentials: 'include',// on every request we have to send the cookie
      })
      const parsedResponse = await indexResponse.json();
      console.log("login response: ", parsedResponse)
      if(parsedResponse.data === 'request successful'){
      }
    } catch (err) {
      console.log(err);
    }
  }


  getRestaurants = async () => {
    try {
      // let searchTerm = userInput
      // const response = await fetch(`http:localhost:9000/api/v1/restaurants`)
      // const RestaurantList = await response.json();
      // this.setState({
      //   restaurantList: restaurant
      // })
    } catch(err) {
      console.log('There was an error below');
      console.log(err);
    }
  }


  render(){
    return (
      <div>
        <h1>Restaurant Index</h1>
        <form onSubmit={this.handleSubmit}>
          Enter Cuisine Type:<br />
          <input type='text' name='cuisine' onChange={this.handleChange}/><br />
          <button type='submit'>Submit</button><br />
        </form>
      </div>
      )
  }
}

export default RestaurantList;




