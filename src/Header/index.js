import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <Link to="/home"> <h1>Home</h1> </Link> <br />
	        <Link to="/register"> <h1>Register</h1> </Link> <br />
	        <Link to="/index"><h1>Restaurants</h1></Link> <br />
	        <Link to="/Account"><h1>Account</h1></Link><br />
	        <Link to="/login"> <h1>Login</h1></Link><br />
        </div>
    </header>
    )
}

export default Header;
