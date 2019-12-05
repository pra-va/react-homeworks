import React, { useContext, useState } from "react";
import UserService from "./../00-Context/UserService";
import CartService from "./../00-Context/CartService";
import Table from "./Table/Table";

const Cart = () => {
  const userService = useContext(UserService);
  const cartService = useContext(CartService);
  var [username, setUsername] = useState(userService.username);

  var updateCart = () => {
    setUsername(userService.username);
  };

  cartService.updateCartList = updateCart;

  return (
    <div>
      <Table username={username} />
    </div>
  );
};

export default Cart;
