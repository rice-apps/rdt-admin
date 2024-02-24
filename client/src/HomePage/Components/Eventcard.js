import React from 'react';
import "./Eventcard.css"



const Eventcard = () => {
    return (
        <div className="eventcard">
        <header className="Home-filter">
            <img src="https://picsum.photos/200/100" alt="Event Picture" className="card-img"/>
            <h1 className="card-title">Events</h1>
            <p className="card-date">Date</p>
            <p className="card-time">Time</p>
            <p className="card-location">Location</p>
            <a href= "cardPage" className="card-btn"> Learn More</a>
        </header>
        </div>
    );
}

export default Eventcard