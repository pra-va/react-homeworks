import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartService from "./../../00-Context/CartService";
import UserService from "./../../00-Context/UserService";
import axios from "axios";

const CartPresentation = () => {
  var [cartState, setCartState] = useState(0);

  let cartContext = useContext(CartService);
  let userService = useContext(UserService);

  var updateCart = () => {
    let urlBuilder =
      "https://itpro2017.herokuapp.com/api/users/" +
      userService.username +
      "/cart-products";
    axios
      .get(urlBuilder)
      .then(response => {
        setCartState(response.data.length);
      })
      .catch(error => {
        console.log(error);
        console.log("CartPresentation.js");
      });
  };

  cartContext.updateMe = updateCart;

  updateCart();

  return (
    <Link className="navbar-brand cart-bg px-2" to="/cart">
      <i className="fas fa-shopping-basket mr-2"></i>
      {cartState} Items
    </Link>
  );
};

export default CartPresentation;
