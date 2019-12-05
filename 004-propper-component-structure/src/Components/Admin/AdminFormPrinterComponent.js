import React from "react";

var AdminPrinterComponent = props => {
  return (
    <div>
      <h3 className="d-flex justify-content-center">Title: {props.title}</h3>
      <h5 className="d-flex justify-content-center">
        <strong>Image URL: </strong> {props.url}
      </h5>
      <h5 className="d-flex justify-content-center">
        <strong>Description: </strong> {props.description}
      </h5>
      <h5 className="d-flex justify-content-center">
        <strong>Price: </strong>
        {props.price}
      </h5>
      <h5 className="d-flex justify-content-center">
        <strong>Quantity: </strong>
        {props.quantity}
      </h5>
    </div>
  );
};

export default AdminPrinterComponent;
