import { User } from "../data/types";

const users: User[] = [ {
  id: "1",
  email: "smithRules@gmail.com",
  username: "bestCostumerOnFCTicket",
  password: "1234SmithInTheHouse!",
  fullName: "Stan Smith",
  creditCardNumber: "",
  dateCreditCard: new Date(),
  cvc: "",
  ticketList: [ {
    id: "",
    eventId: "",
  } ],
} ];

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
