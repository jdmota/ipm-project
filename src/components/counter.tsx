import React from "react"; // eslint-disable-line

export default ( { value, onIncrement, onDecrement } ) => (
  <p>
    Clicked: {value} times
    {" "}
    <button onClick={onIncrement}>
      +
    </button>
    {" "}
    <button onClick={onDecrement}>
      -
    </button>
  </p>
);
