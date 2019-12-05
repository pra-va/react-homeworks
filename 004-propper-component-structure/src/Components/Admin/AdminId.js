import React from "react";

const PrintProductId = props => {
  return (
    <div className="App m-5">
      <h1>Product ID: {props.match.params.id}</h1>
    </div>
  );
};

export default PrintProductId;
