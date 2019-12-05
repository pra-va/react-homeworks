import React, { Component } from "react";
import "./App.css";
import UserOutputComponent from "./Components/UserOutput/UserOutput";
import UserInputComponent from "./Components/UserInput/UserInput";

class App extends Component {
  state = {
    userName: "sad sad bob"
  };

  inputChangedHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserOutputComponent text={this.state.userName} secondPar="Good day" />
        <UserInputComponent
          userNameValue={this.state.userName}
          changed={this.inputChangedHandler}
        />
      </div>
    );
  }
}

export default App;
