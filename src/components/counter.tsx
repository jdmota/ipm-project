import React from "react"; // eslint-disable-line

type CounterProps = {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void
};

export default ( { value, onIncrement, onDecrement }: CounterProps ) => (
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
