import React, { Component } from "react";
import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("jwt");

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  usernameChangedHandler = event => {
    this.setState({ username: event.target.value });
  };

  passwordChangeHandler = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let userData = new URLSearchParams();
    userData.append("username", this.state.username);
    userData.append("password", this.state.password);
    axios
      .post("http://localhost:8080/authenticate", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("Response status: " + response.status);
        console.log(response);
        localStorage.setItem("jwt", response.data.jwt);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  onChange={this.usernameChangedHandler}
                  value={this.state.username}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={this.state.password}
                  onChange={this.passwordChangeHandler}
                />
              </div>
              <div className="form-group form-check"></div>
              <button type="submit" className="btn btn-info">
                Submit
              </button>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
