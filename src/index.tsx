import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import App from "./components/app";
import store from "./data/store";

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById( "root" )
);
