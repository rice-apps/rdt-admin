import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import { message } from "antd";

import { useLocation } from "react-router-dom";

import axios from "axios";

import "../styles/Homepage.css";

const Homepage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { state } = useLocation();
  const [events, setEvents] = useState([]);
  const URL = "https://rdt-backend-production.up.railway.app/";
  useEffect(() => {
    axios
      .get(URL + "getallevents")
      .then((response) => {
        console.log("Events received:", response.data);
        setEvents(response.data);

        // Optionally, navigate to another page or show success message
        // console.log(state)
        // if (state.newEvent) {
        //     messageApi.open({
        //         type: 'success',
        //         content: 'Created new event, ' + state.newEvent + "!",
        //     });
        //     state = {}
        // }
      })
      .catch((error) => {
        console.error("Failed to get events:", error);
        // Optionally, show error message to the user
      });
  }, []);

  return (
    <div>
      {contextHolder}
      <Navbar allowCreateEvent={true} />

      <Search></Search>

      {events.map((event) => (
        <EventCard
          key={event._id}
          id={event._id}
          name={event.name}
          date={event.date}
          startTime={event.startTime}
          endTime={event.endTime}
          location={event.location}
          description={event.description}
          basePrice={event.basePrice}
          studentDiscount={event.studentDiscount}
          atDoorPrice={event.atDoorPrice}
          redemptionCode={event.redemptionCode}
          coverPhoto={event.coverPhoto}
          seatingPhoto={event.seatingPhoto}
          availableSeats={event.availableSeats}
        />
      ))}
    </div>
  );
};

export default Homepage;
