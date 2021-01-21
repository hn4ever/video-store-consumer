import React from 'react';


const Video = (props) => {

    const onSelect = () => {
        props.onSelectVideoCallback(props.id);
    }

    return (
        <div className = "video">
        <h2>Details for {props.title}</h2>
        <ul>
            <p>Overview: {props.overview}</p>
            <p>Release Date: {props.release_date}</p>
            <p>Image: {props.image_url}</p>
        </ul>
        <button onClick={onSelect}> Select </button>
        </div>
    )
}


export default Video; 
