import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  handleEmailChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    let userData = new URLSearchParams();
    userData.append("username", this.state.username);
    userData.append("password", this.state.password);
    axios
      .post("http://localhost:8080/security/login", userData, {
        headers: { "Content-type": "application/x-www-form-urlencoded" }
      })
      .then(response => {
        console.log("user " + response.data.username + " logged in.");
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  handleCalcClick = event => {
    axios
      .get("http://localhost:8080/security/calc?left=1&right=2")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = event => {
    event.preventDefault();
    axios
      .get("http://localhost:8080/security/logout")
      .then(response => {
        console.log("Logged out.");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input type="submit" />
        </form>
        <button onClick={this.handleCalcClick}>Calculate</button>
        <button onClick={this.handleLogout}>logout</button>
      </div>
    );
  }
}

export default LoginForm;
