import React from 'react';
import Eventcard from '../components/Eventcard.js'
import "./home.css";
import { Input } from 'antd';
import Filter from '../components/Filter.js'



const Homepage = () => {
    return (

        <div className= "page">

      <Eventcard></Eventcard>
      <Filter></Filter>

    </div>
 
    );
}


export default Homepage