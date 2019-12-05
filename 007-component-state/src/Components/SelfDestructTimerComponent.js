import React, { Component } from "react";

class SelfDestructTimerComponent extends Component {
  constructor() {
    super();
    this.state = { timeLeft: 10, background: { backgroundColor: "white" } };
  }

  componentDidMount() {
    var interval = setInterval(() => {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
      if (this.state.timeLeft === 0) {
        clearInterval(interval);
        this.setState({ background: { backgroundColor: "red" } });
      }
    }, 1000);
  }

  render() {
    return (
      <div style={this.state.background}>
        <h3>Time left:</h3>
        <h1>{this.state.timeLeft}</h1>
      </div>
    );
  }
}

export default SelfDestructTimerComponent;
