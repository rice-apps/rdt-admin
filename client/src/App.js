import React from 'react';
import './App.css';
import "./components/Navbar";
import Navbar from './components/Navbar';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import LoginForm from './pages/LoginPage'; // Adjust the path as necessary
import RegisterEvent from './pages/RegisterEventPage';
import EditEvent from './pages/EditEventPage';
import Layout from './components/Layout';
import Homepage from './pages/HomePage';
function App() {

  return (
    
    <Layout>
      <LoginForm/>
      <RegisterEvent/> 
      <EditEvent/>
    
      <Homepage/>
      


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
    //     </a>
    //   </header> */}
    // </div>
  );
}
export default App;
