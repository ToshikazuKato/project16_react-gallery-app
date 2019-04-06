import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Nav extends Component {
	
	//run handleSearch when it's clicked
	handleSubmit = e =>{
		let val = e.target.getAttribute('href').replace('/','');
		this.props.handleSearch(val);
	}

	render(){
		//loop to create nav links
		let navArr = this.props.navMenues.map((val, index) => {
			return <li key={index} onClick={this.handleSubmit}><NavLink to={`/${val}`}>{val}</NavLink></li>;
		});

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

}

Nav.propTypes = {
	navMenues: PropTypes.array,
	handleSearch: PropTypes.func
}

export default Nav;