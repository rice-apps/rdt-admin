import React from 'react';
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import Attendance from './components/login/attendance';
import LoginPage from './pages/LoginPage'; // Adjust the path as necessary
import RegisterEvent from './pages/RegisterEventPage';
import EditEvent from './pages/EditEventPage';
import Layout from './components/Layout';
import Homepage from './pages/HomePage';
function App() {

  return (

    // <Attendance />
    <Layout>
      <LoginPage />
      {/* <Homepage/> */}
      {/* <RegisterEvent/>  */}
      {/* <EditEvent/> */}
    
      


    </Layout>
    // <div className="App">
    //   {
    //     <RegisterEvent></RegisterEvent>
      
    //   /* <Navbar name={"Quang"}/>
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
    // </div>
  );
}
export default App;
