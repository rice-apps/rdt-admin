import React from 'react';
import "../styles/Eventcard.css"


const Eventcard = () => {
    return (
        <div className="eventcard">

            <div>
                <img src="https://via.placeholder.com/250" width="1000" height="200" alt="event" className="card-img"/>
            </div>

            <div className="text">
                
                <div className="card-description">
                    <h1 className="card-title">Events</h1>
                    <p className="card-date">Date</p>
                    <p className="card-time">Time</p>  
                    <p className="card-location">Location</p>                
                </div>
            </div>

            <div className='buttons'>
                <a href= "cardPage" className="card-btn1"> Learn More</a>
                <a href= "cardPage" className="card-btn2"> View Attendance</a>
            </div>
        </div>
    );
}
export default Eventcard