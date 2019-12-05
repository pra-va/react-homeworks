import React, { Component } from "react";
import "./../../App.css";

class IncreasingButtonComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  buttonClickHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="App p-5">
        <button className="btn btn-info" onClick={this.buttonClickHandler}>
          Click Me
        </button>
        <h2 className="m-2">{this.state.count}</h2>
      </div>
    );
  }
}

export default IncreasingButtonComponent;
