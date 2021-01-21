import React from 'react';
// import PropTypes from 'prop-types';
import './Library.css';
import Video from './Video';


const Library = (props) => {
    const videosResponseData = props.videosList.map((video) => {
        return ( < Video
            key = {video.id}
            id = {video.id}
            title = {video.title}
            overview = {video.overview}
            release_date = {video.release_date}
            image_url = {video.image_url}
            external_id = {video.external_id}
            onSelectVideoCallback = {props.onSelectVideoCallback}
            /> );
    });


    return (
        <div className = 'library'>
            {videosResponseData}
        </div>
    )
}

// Proptypes here 

export default Library; 
