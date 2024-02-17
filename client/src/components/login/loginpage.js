import './loginpage.css';

function Login() {
  return (
    <div className="login">
      <header className="App-header">
        <img src={"https://riceapps.org/static/media/logo_color_light.7d03c94d.png"} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
            Rice Dance Theater
        </p>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Function to create and return a new element with certain attributes and content
function createElement(tag, attributes, textContent) {
  var element = document.createElement(tag);
  for (var key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

  return form;


export default Login;

