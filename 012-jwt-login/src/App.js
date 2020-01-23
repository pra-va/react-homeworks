import React from "react";
import "./App.css";
import LoginForm from "./components/loginForm/Login";
import axios from "axios";

function App() {
  var handleConnection = event => {
    event.preventDefault();
    var jwt = "Bearer " + localStorage.getItem("jwt");
    console.log(jwt);
    axios
      .get("http://localhost:8080/hello")
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <h1>Hi, hello</h1>
      <LoginForm />
      <button onClick={handleConnection} className="btn btn-info mt-5">
        Connect
      </button>
    </div>
  );
}

export default App;
