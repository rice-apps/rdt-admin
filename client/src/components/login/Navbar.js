import React from 'react'
import './Navbar.css'

const Navbar = (prop) => {

  return (
    <nav>
        <ul>
            <li>New Event</li>
            <li>Sign Out</li>
            <li>{prop.name}</li>
        </ul>
    </nav>
  )
}

export default Navbar
