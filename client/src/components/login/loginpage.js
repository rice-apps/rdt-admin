import React from "react";
import "./loginpage.css";
import testPic from '../../images/testpic.png';
import google from'../../images/google.png';

const Login = () => {
  return (
    <div className="container">
      <div className="purple-rectangle">
        <div className="text-container">
          <img
            className= "image"
            src= {testPic}
            alt = "imagetoinsert"
          />
</div>
    <div className="login-container">
      <h1 className="title">Log in to Rice Dance Theatre</h1>
      <button className="google-signin">
        <img
          className="google-icon"
          src={google}
          alt="Google"
        />
        Log in with Google
      </button>
    </div>
  </div>
</div>
  );
};

export default Login;