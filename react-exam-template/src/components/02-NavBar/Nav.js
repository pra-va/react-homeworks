import React, { Component } from "react";
import NavHeader from "./NavHeader/NavHeader";
import "./Nav.css";

class NavBar extends Component {
  render() {
    return (
      <div className="fill-window">
        <NavHeader />
        <div className="container mt-3 p-3">{this.props.children}</div>
      </div>
    );
  }
}

export default NavBar;
