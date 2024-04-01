import React, { useEffect } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  
  // TODO: write function for button onclick- navigate to new-event page
  
  function NewEventButtonClick() {
      navigate("/register");
      console.log("onclick");
  }

  return (
    <nav>
    <a href="/" className="site-title">Rice Dance Theatre</a>
      <ul>
        {/* <li><a href="/new-event">New Event</a></li>
        <li><a href="sign-out">Sign Out</a></li>   */}

        {props.allowCreateEvent && <li>
          <button type='button' className='button' 
        onClick={() => NewEventButtonClick()}> &#43; New Event
          </button>
        </li>}
        <li><a href="sign-out" onClick={() => navigate("sign-out")}>Sign Out</a></li>
      </ul>
    </nav>



  )
}

export default Navbar
