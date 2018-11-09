import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";


// https://material-ui.com/style/typography/#migration-to-typography-v2
const win: any = window;
win.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
  </MuiPickersUtilsProvider>,

  document.getElementById( "root" )
);
