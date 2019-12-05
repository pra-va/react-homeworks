import React from "react";
import "./App.css";
import ServicesContext from "./ServicesContext";

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          These are my "Learning React" projects from lecture 3.
        </p>
        <hr className="my-4" />
        <p>
          Author:
          <ServicesContext.Consumer>
            {value => " " + value.author}
          </ServicesContext.Consumer>
        </p>
      </div>
    </div>
  );
}

export default App;
