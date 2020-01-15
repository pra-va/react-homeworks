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
        <img src={props.image} className="card-img-top" alt="Unable to load" />
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
