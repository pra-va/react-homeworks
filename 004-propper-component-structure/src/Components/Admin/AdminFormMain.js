import React, { useState } from "react";
import AdminFormPrinterComponent from "./AdminFormPrinterComponent";
import ProductAdministrationComponent from "./ProductAdministrationComponent";

const AdminFormMain = () => {
  var [product, setProduct] = useState({
    title: "empty",
    imageUrl: "empty",
    description: "empty",
    price: 0.0,
    quantity: 0
  });

  var submitHandler = event => {
    event.preventDefault();
    setProduct({
      title: event.target.elements.title.value,
      imageUrl: event.target.elements.url.value,
      description: event.target.elements.description.value,
      price: event.target.elements.price.value,
      quantity: event.target.elements.quantity.value
    });
    console.log(event.target.elements.title.value);
  };

  return (
    <div className="container">
      <ProductAdministrationComponent formSubmitHandler={submitHandler} />{" "}
      <AdminFormPrinterComponent
        title={product.title}
        url={product.imageUrl}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
      />
    </div>
  );
};

export default AdminFormMain;
