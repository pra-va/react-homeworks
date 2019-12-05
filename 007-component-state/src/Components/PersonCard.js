import React, { Component } from "react";

class PersonCard extends Component {
  constructor(props) {
    super();
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age
    };
  }

  getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>First name: {this.state.firstName}</h2>
        <h2>Last name: {this.state.lastName}</h2>
        <h5>Age: {this.state.age}</h5>
      </div>
    );
  }
}

export default PersonCard;
