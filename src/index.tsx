import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()( createStore );

ReactDOM.render(
  <Provider store={createStoreWithMiddleware( reducers )}>
    <Root />
  </Provider>
  , document.getElementById( "root" )
);
