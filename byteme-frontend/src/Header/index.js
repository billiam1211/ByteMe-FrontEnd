import React from 'react';
import { Link } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';


const Header = () => {

  return (
    <header>
    	<div>
	        <Link to="/register"> Register </Link> <br />
	        <Link to="/login"> Login </Link> <br />
	        <Link to="/index"> Index </Link> <br />
	        <Link to="/AccountShow"> Account </Link>
        </div>
    </header>
    )
}

export default Header;
