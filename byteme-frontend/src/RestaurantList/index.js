import React, { Component } from 'react';

class RestaurantList extends Component {
  constructor(){
    super();
    this.state = {
      cuisine: '',
      restaurantList: [],
    }
  }


  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(this.state.cuisine + '  <-- SearchTerm');
      this.getRestaurants()
    } catch (err) {
      console.log(err);
    }
  }


  getRestaurants = async () => {
    try {
      // console.log("cuisine to search for: ", this.state.cuisine)
      let searchTerm = {query: this.state.cuisine};
      // console.log('step 1 - get restaurants');
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/restaurants/search', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(searchTerm),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // console.log('here is the response: ')
      // console.log(response);
      const responseJson = await response.json()
      console.log("here is the converted response: ", responseJson);

      console.log(responseJson);
      this.setState({
        restaurantList: responseJson.data
      })
      console.log(this.state.restaurantList);
    } catch(err) {
      console.log('There was an error below');
      console.log(err);
    }
  }



  render(){

    const restaurantListItems = this.state.restaurantList.map((restaurant, i) => {
      return (
        <li key={i}>
          <a href={restaurant.url}> Name: { restaurant.name }</a> <br />
          Address: { restaurant.address } { restaurant.zipcode } <br />
          Restaurant Id: { restaurant.restaurantId } <br /><br />
        </li>
        )
    })
    return (
      <div>
        <h1>Restaurant Index</h1>
        <form onSubmit={this.handleSubmit}>
          Enter Cuisine Type:<br />
          <input type='text' name='cuisine' onChange={this.handleChange}/><br />
          <button type='submit'>Submit</button><br />
          <ul>
            { restaurantListItems }
          </ul>
        </form>
      </div>
      )
  }
}

export default RestaurantList;

// {
//   method: 'PUT',
//   credentials: 'include',
//   body: JSON.stringify(BODY),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// }

