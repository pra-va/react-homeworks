import React, { Component } from "react";
import "./Nav.css";
import NavHeader from "./NavHeader/NavHeader";
import UserService from "./../00-Context/UserService";
import CartService from "./../00-Context/CartService";

class NavBar extends Component {
  render() {
    return (
      <div className="fill-window">
        <CartService.Provider
          value={{ updateMe: () => {}, updateCartList: () => {} }}
        >
          <UserService.Provider value={{ username: "" }}>
            <NavHeader />
            <div className="container mt-3 p-3">{this.props.children}</div>
          </UserService.Provider>
        </CartService.Provider>
      </div>
    );
  }
}

export default NavBar;
