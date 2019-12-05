import React, { Component } from "react";
import PicturePresentation from "./PicturePresentationComponent";
import "./../../App.css";

class PictureContainer extends Component {
  constructor() {
    super();
    this.state = { turn: 0 };
    this.rotateInterval = "";
  }

  rotationHandler = () => {
    console.log("mouse in");
    this.rotateInterval = setInterval(() => {
      this.setState({ turn: (this.state.turn + 2) % 360 });
    }, 40);
  };

  stopRotationHandler = () => {
    console.log("mouse out");
    clearInterval(this.rotateInterval);
  };

  render() {
    return (
      <div className="App">
        <PicturePresentation
          testStyle={this.testStyle}
          rotates={this.rotationHandler}
          angle={this.state.turn}
          stopsRotate={this.stopRotationHandler}
        />
      </div>
    );
  }
}

export default PictureContainer;
