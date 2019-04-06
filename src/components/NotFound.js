import React from 'react';

const NotFound = ({title, text}) => {
    return(
        <li className="not-found error" style={{listStyleType: "none"}}>
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}

export default NotFound;