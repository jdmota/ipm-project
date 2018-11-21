import { User } from "../data/types";

const users: User[] = [ {
  id: "1",
  mail: "smithRules@gmail.com",
  nickname: "bestCostumerOnFCTicket",
  password: "1234SmithInTheHouse!",
  firstName: "",
  lastName: "Smith",
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
