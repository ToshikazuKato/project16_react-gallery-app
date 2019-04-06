import React from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Photo from './Photo';


const PhotoContainer = ({photos}) => {
    if(photos.length > 0){
        var photoArr = [];
        photos.map( (photo, index) => {
            return photoArr.push(<Photo photo={photo} key={index} />);
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
		// if no result
		let chk = document.querySelector('li.not-found.error');
		if(chk){
			return null;
		}else{
			return (
				<NotFound title='No Results Found' text='You search did not return any results. Please try again.' />
			);
		}
        
    }
};

PhotoContainer.propTypes = {
    photos : PropTypes.array,
}

export default PhotoContainer;