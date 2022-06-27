import React from "react";

const Square = (props) => {
  function btnClicked() {}
  return (
    <button onClick={props.onClick} type="button" className="square">
      {props.value}
    </button>
  );
};

export default Square;
