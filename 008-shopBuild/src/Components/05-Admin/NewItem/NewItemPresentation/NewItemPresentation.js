import React from "react";
import Form from "./FormPresentation/FormPresentation";
import Card from "./../../../04-Merchandise/Card/CardPresentationComponent";

const NewItemPresentation = props => {
  return (
    <div className="row">
      <div className="col-12 col-md-8 col-lg-9">
        <Form
          imageChangedHandler={props.imageChangedHandler}
          titleChangedHandler={props.titleChangedHandler}
          descriptionChangedHandler={props.descriptionChangedHandler}
          priceChangedHandler={props.priceChangedHandler}
          quantityChangedHandler={props.quantityChangedHandler}
          submitHandler={props.submitHandler}
        />
      </div>
      <div className="col-12 col-md-4 col-lg-3">
        <label style={{ fontSize: "1.1em" }}>Item Card Example</label>
        <Card
          buttonIsDisabled="true"
          id="example"
          image={props.image}
          title={props.title}
          price={props.price}
          quantity={props.quantity}
        />
      </div>
    </div>
  );
};

export default NewItemPresentation;
