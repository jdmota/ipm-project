import { User } from "../data/types";

const userList: User[] = [ {
  id: "1",
  email: "smithRules@gmail.com",
  username: "bestCostumerOnFCTicket",
  password: "1234SmithInTheHouse!",
  fullName: "Stan Smith",
  creditCardNumber: "",
  dateCreditCard: new Date(),
  cvv: "",
  ticketList: [ {
    id: "",
    eventId: "",
  } ],
} ];

const initialState = {
  userList,
  loggedInUser: null
};

export default function( state = initialState, action ) {
  switch ( action.type ) {
    case "ADD_USER":
      return {
        ...state,
        userList: [
          ...state.userList,
          action.payload
        ]
      };
    case "LOGIN_USER":
      return {
        ...state,
        loggedInUser: action.payload
      };
    case "LOGOUT_USER":
      return {
        ...state,
        loggedInUser: null
      };
    default:
      return state;
  }
}
