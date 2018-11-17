import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./root";
import store from "./data/store";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById( "root" )
);
