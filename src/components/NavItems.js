import React from 'react';
import { NavLink } from 'react-router-dom';


const NavItems = ({menu, key}) => {
	console.log(menu, key);
    return(
        <li>
            <NavLink to={`/${menu}`} key={key}>{menu}</NavLink>
        </li>
    );
}

export default NavItems;