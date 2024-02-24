import React from 'react';
import './App.css';
import 'antd/dist/reset.css';
import LoginForm from './components/login/loginpage'; // Adjust the path as necessary
import RegisterEvent from './components/login/registerevent';


function App() {
  return (
    <div>
      <RegisterEvent />
    </div>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <RegisterEvent/>
//     </div>
//   );
// }

export default App;
