import React, { Component } from "react";

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
      <div>
        <button onClick={this.buttonClickHandler}>Click Me</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

export default IncreasingButtonComponent;
