import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


function RestaurantShow (props) {

	console.log('Here is props ---> ', props);

    return (
    	<div class="form">
	      <div>
	        <h1 class="Home">Restaurant Info</h1>
        	<h3>{ props.restaurant.name }</h3>
        	<ul id="restaurantShow">
	    		<li>
	    			{props.restaurant.address}
	    		</li>
	    		<li>
			        {props.restaurant.zipCode}
	    		</li>
	    		<li>
	    			{props.restaurant.cuisine}
	    		</li>
	    		<li>
	    			<a href={props.restaurant.url} target="_blank" rel="noopener noreferrer">{props.restaurant.url}</a>
				</li>
        	</ul>
        	<button onClick={props.redirect}>Write Review</button>
	      </div>
      	</div>

      )
}





export default RestaurantShow;