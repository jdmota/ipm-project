import React from "react"; // eslint-disable-line
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/counter"; // eslint-disable-line
import reducer from "./reducers";

const store = createStore( reducer );
const rootEl = document.getElementById( "root" );

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch( { type: "INCREMENT" } )}
    onDecrement={() => store.dispatch( { type: "DECREMENT" } )}
  />,
  rootEl
);

render();
store.subscribe( render );
