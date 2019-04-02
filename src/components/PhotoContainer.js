import React from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = ({photos}) => {
    if(photos.length > 0){
        var photoArr = [];
        photos.map( (photo, index) => {
            photoArr.push(<Photo photo={photo} key={index} />);
			return null;
        });
        return(
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    {photoArr}  
                </ul>
            </div>
        );
    }else{
        return(
            <NotFound />
        );
    }
};

PhotoContainer.propTypes = {
    photos : PropTypes.array,
}

export default PhotoContainer;