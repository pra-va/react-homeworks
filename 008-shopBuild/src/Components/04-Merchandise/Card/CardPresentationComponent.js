import React from "react";
import { Link } from "react-router-dom";

var ProductCard = props => {
  var btnClassName = "btn btn-light";
  if (props.buttonIsDisabled) {
    btnClassName += " disabled";
  }
  return (
    <div className="">
      <div className="card text-white bg-secondary border-dark">
        <img
          src="https://images.unsplash.com/photo-1518302057166-c990a3585cc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
          className="card-img-top"
          alt="Unable to load"
        />
        <div className="card-body">
          <h5 className="card-title text-white">{props.title}</h5>
          <h6 className="card-title">Price: {props.price}</h6>
          <p className="card-text">
            <small className="text-white">
              Items In Stock: {props.quantity}
            </small>
          </p>

          <Link to={"/merch/" + props.id} className={btnClassName}>
            DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
