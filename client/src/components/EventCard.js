//import React from 'react';
import "../styles/Eventcard.css"
import axios from "axios"
import React, { useState, useEffect } from "react";
import {Routes, Route, Link } from 'react-router-dom';
import RegisterEvent from '../pages/RegisterEventPage.js';
import EditEvent from "../pages/EditEventPage.js";


const Eventcard = (props) => {

   return (
    <div className="eventcard">
            <div>
                <img src="https://via.placeholder.com/250" width="1000" height="200" alt="event" className="card-img"/>
            </div>

            <div className="text">
                
                <div className="card-description">
                   <h1 className="card-title"> {props.name}</h1>
                   <p className="card-date">Date: {props.date}</p>
                   <p className="card-time">Time: {props.startTime}</p>  
                   <p className="card-location">Location: {props.location}</p> 

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




//    const URL = "https://rdt-backend-production.up.railway.app/getallevents";

//    const URL1 = "https://swapi.dev/api/people/1/"

//    // Set up the state to store the fetched data
//    const [eventName, setEventName] = useState([]);
 
//    useEffect(() => {
//      const fetchData = async () => {
//        console.log("Making GET Request");
//        try {
//          // GET Request

//          const response = await axios.get(URL1)
// 						 .then((response) => {
// 						console.log(response)

// 				})
//         const data = response.data
//         // const name_of_person = data["name"]
        

//         console.log(setEventName)


//          }catch(error){
//             console.error("Failed to fetch", error)
//          }
//         };
     
 
//      fetchData();
//    }, []);