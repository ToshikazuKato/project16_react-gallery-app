import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({photo}) => {
    return(
        <li>
            <img
                src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt={`${photo.title}`}
            />
        </li>
    );
}

Photo.propTypes = {
    photo : PropTypes.object,
}

export default Photo;