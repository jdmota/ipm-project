import { combineReducers } from "redux";
import EventsReducer from "./events";
import ParamsReducer from "./params";
import UsersReducer from "./users";

const rootReducer = combineReducers( {
  events: EventsReducer,
  params: ParamsReducer,
  users: UsersReducer,
} );

export default rootReducer;
