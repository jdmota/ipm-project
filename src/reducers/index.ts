import { combineReducers } from "redux";
import EventsReducer from "./events";
import ParamsReducer from "./params";
import UsersReducer from "./users";
import TicketsReducer from "./tickets";

const rootReducer = combineReducers( {
  events: EventsReducer,
  params: ParamsReducer,
  users: UsersReducer,
  tickets: TicketsReducer,
} );

export default rootReducer;
