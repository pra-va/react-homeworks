import React from "react";

var userOutputComponent = props => {
  return (
    <div>
      <p>Some text passed here</p>
      <p>{props.text}</p>
    </div>
  );
};

export default userOutputComponent;
