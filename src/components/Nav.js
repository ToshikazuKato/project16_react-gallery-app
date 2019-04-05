import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({navMenues, handleSearch}) => {
	console.log(navMenues);
	console.log(handleSearch);

	 let navArr = navMenues.map((val, index) => {
		return <li key={index} ><Link to={`/${val}`}>{val}</Link></li>;
	})
    return(
        <nav className="main-nav">
            <ul>
				{
					navArr			
				}
            </ul>
        </nav>
    );
}

Nav.propTypes = {
	navMenues: PropTypes.array,
	handleSearch: PropTypes.func
}

export default Nav;