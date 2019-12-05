import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserService from "./../../00-Context/UserService";
import axios from "axios";
import UsernamePresentation from "./../UsernamePresentation/UsernamePresentation";
import CartPresentation from "./../CartPresentation/CartPresentation";

const NavHeader = props => {
  const userContext = useContext(UserService);
  if (userContext.username.length > 0) {
    const userAddress =
      "https://itpro2017.herokuapp.com/api/users/" +
      userContext.username +
      "/cart-products";

    axios
      .get(userAddress)
      .then(response => {
        console.log("Cart size: " + response.data.length);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md navbar-fixed-top">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-dragon"></i>
        _shop
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/merch">
              Merchandise <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Admin
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/admin/add" className="dropdown-item">
                Add New Product
              </Link>
              <Link to="/admin/list" className="dropdown-item">
                Products List
              </Link>
            </div>
          </li>

          <UsernamePresentation />
        </ul>

        <CartPresentation usernameChangeHandler={props.usernameChangeHandler} />
      </div>
    </nav>
  );
};

export default NavHeader;
