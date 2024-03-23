import React from 'react';
import "./Eventcard.css"


const Eventcard = () => {
    return (
        <div className="eventcard">

            <div>
                <img src="https://via.placeholder.com/250" alt="event" className="card-img"/>
            </div>

            <div className="text">
                <h1 className="card-title">Events</h1>
                
                <div className="card-description">
                    <p className="card-date">Date</p>
                    <p className="card-time">Time</p>  
                    <p className="card-location">Location</p>                
                </div>
            </div>

            <div className='buttons'>
                <a href= "cardPage" className="card-btn"> Learn More</a>
                <a href= "cardPage" className="card-btn"> View Attendance</a>
            </div>
        </div>
    );
}
export default Eventcard