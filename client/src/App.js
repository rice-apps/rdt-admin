import React from 'react';
import './App.css';
import "./components/login/Navbar";
import Navbar from './components/login/Navbar';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import LoginForm from './components/login/loginpage'; // Adjust the path as necessary
import RegisterEvent from './components/login/registerevent';
import Homepage from './components/Homepage.js';
function App() {

  return (
    
    <div className="App">
      {
        <Homepage></Homepage>
      }
  </div>
  );
  }

export default App;
