import React, { Component } from 'react';

class RestaurantList extends Component {
  constructor(){
    super();
    this.state = {
      cuisine: '',
      restaurantList: [],
    }
  }



  // componentDidMount() {
  //   this.getRestaurants.then(data => {
  //     this.setState({
  //       restaurants: data
  //     })
  //   })
  // }



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

      console.log("cuisine to search for: ", this.state.cuisine)

      let searchTerm = {query: this.state.cuisine};
      console.log('step 1 - get restaurants');

      const response = await fetch('http://localhost:9000/api/v1/restaurants/search', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(searchTerm),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      
      console.log('here is the response: ')

      console.log(response);

      const restaurantList = await response.json()

      console.log("here is the converted response: ", restaurantList);

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
          <ul>
            <li>
              {this.state.restaurantList}
            </li>
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

