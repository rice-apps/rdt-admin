import React from 'react';
import './App.css';
import "./components/login/Navbar";
import Navbar from './components/login/Navbar';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import LoginForm from './components/login/loginpage'; // Adjust the path as necessary
import RegisterEvent from './components/login/registerevent';
import Attendance from './components/login/attendance';


function App() {

  return (

    <Attendance />
    
    // <div className="App">
    //   <Navbar name={"Quang"}/>
    //   <header className="App-header">
    //     <img src={"https://riceapps.org/static/media/logo_color_light.7d03c94d.png"} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
export default App;
