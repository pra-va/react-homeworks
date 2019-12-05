import React, { useContext, useState } from "react";
import UserService from "./../../00-Context/UserService";
import CartService from "./../../00-Context/CartService";

const UsernamePresentation = () => {
  const userService = useContext(UserService);
  const cartService = useContext(CartService);
  var [usernameState, setUsernameState] = useState(
    localStorage.getItem("username")
  );

  userService.username = usernameState;

  const usernameChangeHandler = event => {
    event.preventDefault();
    setUsernameState(event.target.value);
    userService.username = event.target.value;
    localStorage.setItem("username", event.target.value);
    cartService.updateMe();
    cartService.updateCartList();
  };

  return (
    <li className="ml-3 nav-item">
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Username"
          onChange={usernameChangeHandler}
          value={usernameState}
        />
      </div>
    </li>
  );
};

export default UsernamePresentation;
