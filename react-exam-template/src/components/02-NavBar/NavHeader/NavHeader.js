import React from "react";
import { Link } from "react-router-dom";

const NavHeader = props => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md navbar-fixed-top">
      <Link to="/" className="navbar-brand">
        <i className="fas fa-dragon"></i>
        _exam
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
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
