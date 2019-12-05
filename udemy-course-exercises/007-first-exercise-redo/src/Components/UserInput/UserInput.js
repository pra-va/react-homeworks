import React from "react";

var userInputComponent = props => {
  return (
    <div>
      <input onChange={props.changed} type="text" value={props.userNameValue} />
    </div>
  );
};

export default userInputComponent;
