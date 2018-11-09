import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import App from "./components/app";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

// https://material-ui.com/style/typography/#migration-to-typography-v2
const win: any = window;
win.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const App2 = hot( module )( () => (
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <App />
  </MuiPickersUtilsProvider>
) );

ReactDOM.render(
  <App2 />,
  document.getElementById( "root" )
);
