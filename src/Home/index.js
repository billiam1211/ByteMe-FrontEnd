import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Login from '../Login'


class Home extends Component {
  constructor(props){
    super();
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(this.state.cuisine + ' <-- SearchTerm');
      this.props.history.push("/Register");

    } catch (err) {
      console.log(err);
    }
  }

  render(){
    return (
        <div>
          <div className="centerForm">
            <h1 className="Home">Welcome to Chicago Bytes!</h1><br/><br/>
            <h4>Chicago Bytes is the best online source to 
            find a great dining option in the city of Chicago.
            Thousands of options are available from local 
            hotspots, with reviews from our site members! 
            </h4><br/><br/>

            <button className="homeBtn" type="submit" onClick={this.handleSubmit}>Click Here To Register</button>
          </div>
        </div>

      )
  }
}






export default Home;