import React from "react";

const ProductCardComponent = props => {
  return (
    <div className="col-4 my-3">
      <div className="card">
        <img src={props.photo} className="card-img-top" alt="POTATO" />
        <div className="card-body">
          <h4 className="card-title text-center">{props.title}</h4>
          <h5 className="card-title text-center">{props.description}</h5>
          <h5 className="card-title text-center">{props.price}</h5>
          <h5 className="card-title text-center">{props.quantity}</h5>
          <a
            href="/"
            className="btn btn-primary text-center d-flex justify-content-center"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardComponent;
