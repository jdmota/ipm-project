import { User } from "../data/types";

const users: User[] = [];

export default function( state = users, action ) {
  switch ( action.type ) {
    case "ADD_USER":
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
