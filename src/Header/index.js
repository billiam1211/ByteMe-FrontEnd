import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <header>
    	<div id="headerDiv">
            <div className="Home" id="mobileHeader">ChicagoBytes.com</div>
            <div className="mobileLinks"><Link to="/home"> <h5 className="headerLinks">Home</h5> </Link></div> <br />
	        <div className="mobileLinks"><Link to="/register"> <h5 className="headerLinks">Register</h5> </Link></div> <br />
	        <div className="mobileLinks"><Link to="/index"><h5 className="headerLinks">Restaurants</h5></Link></div> <br />
	        <div className="mobileLinks"><Link to="/Account"><h5 className="headerLinks">My Account</h5></Link></div><br />
	        <div className="mobileLinks"><Link to="/login"> <h5 className="headerLinks">Login</h5></Link></div><br />
        </div>
    </header>
    )
}

export default Header;
