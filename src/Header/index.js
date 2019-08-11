import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <div className="Home">ChicagoBytes.com</div>
            <Link to="/home"> <h5 className="headerLinks">Home</h5> </Link> <br />
	        <Link to="/register"> <h5 className="headerLinks">Register</h5> </Link> <br />
	        <Link to="/index"><h5 className="headerLinks">Restaurants</h5></Link> <br />
	        <Link to="/Account"><h5 className="headerLinks">My Account</h5></Link><br />
	        <Link to="/login"> <h5 className="headerLinks">Login</h5></Link><br />
        </div>
    </header>
    )
}

export default Header;
