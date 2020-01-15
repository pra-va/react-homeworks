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
    let username = userService.username;
    if (username.length > 0 && username !== null) {
      let urlBuilder = "http://localhost:8080/shop/api/cart/" + username;
      axios
        .get(urlBuilder)
        .then(response => {
          setCartState(response.data.length);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      if (cartState !== 0) {
        setCartState(0);
      }
    }
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
