import EventsReducer from "./events";
import ParamsReducer from "./params";
import UsersReducer from "./users";
import TicketsReducer from "./tickets";

const initialState = {
  events: undefined,
  params: undefined,
  users: undefined,
  tickets: undefined
};

export default function( state = initialState, action ) {
  return {
    events: EventsReducer( state.events, action ),
    params: ParamsReducer( state.params, action ),
    users: UsersReducer( state.users, action ),
    // @ts-ignore
    tickets: TicketsReducer( state.tickets, action, state.users ? state.users.loggedInUser : null )
  };
}
