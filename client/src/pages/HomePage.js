import { useState, useEffect } from 'react'
import EventCard from '../components/EventCard';
import Search from '../components/Search';
import Navbar from "../components/Navbar"

import axios from 'axios'

import "../styles/Homepage.css";

const Homepage = () => {
    const [events, setEvents] = useState([])
    const URL = "https://rdt-backend-production.up.railway.app/";
    useEffect(() => {
        axios.get(URL + 'getallevents')
            .then(response => {
                console.log('Events received:', response.data);
                setEvents(response.data)

                // Optionally, navigate to another page or show success message
            })
            .catch(error => {
                console.error('Failed to get events:', error);
                // Optionally, show error message to the user
            });


    }, [])
    return (
        
        <div>
            <Navbar allowCreateEvent ={true}/>

            <Search></Search>

            {
                events.map(event => 
                    <EventCard name={event.name} 
                               date={event.date} 
                               startTime={"temp"} 
                               location={event.location}
                               description={event.description}
                               prices={event.price}
                            //    codes={event.redemptionCodes}

                               />
                )

            }

            
        </div>



    );
}


export default Homepage

