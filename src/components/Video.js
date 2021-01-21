import React from 'react';
import './Video.css'


const Video = (props) => {

    const onSelect = () => {
        props.onSelectVideoCallback(props.id);
    }

    return (
        <div className = "video">
            <h2>{props.title}</h2>
            <ul>
                <img className = 'image'src={props.image_url} alt='video cover'/>
                <p className= 'overview'>Overview: {props.overview}</p>
                <p>Release Date: {props.release_date}</p>
            </ul>
            <button onClick={onSelect}> Select </button>
        </div>
    )
}


export default Video; 
