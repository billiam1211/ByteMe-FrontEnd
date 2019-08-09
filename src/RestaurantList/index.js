import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import RestaurantShow from '../RestaurantShow';


// Component for rendering a list of restaurants based on the user search term
class RestaurantList extends Component {
  constructor(){
    super();
    this.state = {
      cuisine: '',
      restaurantList: [],
      indexOfRestToShow: -1,
      redirect: false
    }
  }


  // handles the change for filling in field in the searchbar
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }


  // handles the submit button and calls the getRestaurant function
  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(this.state.cuisine + ' <-- SearchTerm');
      this.getRestaurants()
    } catch (err) {
      console.log(err);
    }
  }


  // stores the index number of the restuarant that we want to show
  showRestaurant = async (e) => {
    // console.log(e.currentTarget.dataset.restId);
    await this.setState({
      indexOfRestToShow: e.currentTarget.dataset.restId,
    })
    // console.log(this.state.indexOfRestToShow + 'index of restaurant to show');
  }


// calls API to get a list of restaurants based on the searchTerm stored in state
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
      // console.log("here is the converted response: ", responseJson);

      // console.log(responseJson);
      this.setState({
        restaurantList: responseJson.data
      })
      // console.log(this.state.restaurantList);
    } catch(err) {
      console.log('There was an error below');
      console.log(err);
    }
  }


  // renders Restaurant List component and also renders the Restaurant Show page if a user clicks
  // on the name of the restaurant
  render(){
    // console.log(this.state.restaurantList[this.state.indexOfRestToShow]);
    const restaurantListItems = this.state.restaurantList.map((restaurant, i) => {
      return (
        <div>
          <li key={restaurant.restaurantId}>
            <p className="fake-link" data-rest-id={i} onClick={this.showRestaurant}> Name: { restaurant.name }</p><br />
            Address: { restaurant.address } { restaurant.zipcode } <br />
            Cuisine: { restaurant.cuisine } <br />
            Restaurant Id: { restaurant.restaurantId } <br /><br />
          </li>
        </div>
      )
    })
    if(this.state.indexOfRestToShow != -1){
      return (
          <div class="Home">
             <RestaurantShow restaurant={this.state.restaurantList[this.state.indexOfRestToShow]} />
          </div>
      )
    } else {
      return (
          <div class="form">
            <div>
              <h1 class="Home">Restaurant Index</h1>
              <form onSubmit={this.handleSubmit}>
                <h3>Enter Cuisine Type:</h3>
                <input type='text' name='cuisine' onChange={this.handleChange}/>
                <button type='submit'>Submit</button>
                <ul>
                  { restaurantListItems }
                </ul>
              </form>
            </div>
          </div>
      )
    }
    // if(this.state.redirect == true){
    //   this.props.history.push('/RestaurantShow')
    // }
  }
}







export default RestaurantList;