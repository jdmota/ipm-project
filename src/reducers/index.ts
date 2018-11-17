import { combineReducers } from "redux";
import EventsReducer from "./events";
import ParamsReducer from "./params";

const rootReducer = combineReducers( {
  params: ParamsReducer,
  events: EventsReducer,
} );

export default rootReducer;
