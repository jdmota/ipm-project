import React from "react"; // eslint-disable-line
import ReactDOM from "react-dom";
import App from "./components/app";

const rootEl = document.getElementById( "root" );

const render = () => ReactDOM.render(
  <App />,
  rootEl
);

render();
