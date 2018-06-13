import React from "react";

const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>
      <h1>I am just happy</h1>
    </div>
  );
}

export default SimplerComponent;
