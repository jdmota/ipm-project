import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// https://material-ui.com/style/typography/#migration-to-typography-v2
const win: any = window;
win.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <App />,
  document.getElementById( "root" )
);
