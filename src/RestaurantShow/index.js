import React from 'react';


function RestaurantShow (props) {

	console.log('Here is props ---> ', props);

	const reviews = props.reviews.map((review, i) => {

	return (
		<div>
			<li className="reviewContainer" key={i}>
				<div className="reviewChunk">
					{ review.restaurantname }  <br />
					RATING: { review.rating } stars<br />
					{ review.username }<br />
				</div>
				<div className="reviewChunk">
					{ review.title }  <br />
				</div>
				<div className="reviewChunk">
					{ review.review } <br />
				</div>
			</li>
		</div>
	)
	})

	if(props.reviews.length != undefined){

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
	        	<h2 class="reviewsHeader">Customer Reviews</h2>
	        	{ reviews }
		      </div>
	      	</div>

	      )
	} else {
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










    // return (
    // 	<div class="form">
	   //    <div>
	   //      <h1 class="Home">Restaurant Info</h1>
    //     	<h3>{ props.restaurant.name }</h3>
    //     	<ul id="restaurantShow">
	   //  		<li>
	   //  			{props.restaurant.address}
	   //  		</li>
	   //  		<li>
			 //        {props.restaurant.zipCode}
	   //  		</li>
	   //  		<li>
	   //  			{props.restaurant.cuisine}
	   //  		</li>
	   //  		<li>
	   //  			<a href={props.restaurant.url} target="_blank" rel="noopener noreferrer">{props.restaurant.url}</a>
				// </li>
    //     	</ul>
    //     	<button onClick={props.redirect}>Write Review</button>

	   //    </div>
    //   	</div>

    //   )
}





export default RestaurantShow;