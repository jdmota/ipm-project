import { User } from "../data/types";

const userList: User[] = [ {
  id: "1",
  email: "smithRules@gmail.com",
  username: "bestCostumerOnFCTicket",
  password: "1234SmithInTheHouse!",
  fullName: "Stan Smith",
  creditCardNumber: 123,
  dateCreditCard: new Date(),
  cvv: 123,
  ticketList: [],
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
        ],
        loggedInUser: action.payload
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
    case "BUY": {
      let loggedInUser;
      const userList = state.userList.map( user => {
        if ( user === state.loggedInUser ) {
          loggedInUser = {
            // @ts-ignore
            ...user,
            ticketList: [
              ...user.ticketList,
              ...action.payload
            ]
          };
          return loggedInUser;
        }
        return user;
      } );
      return {
        userList,
        loggedInUser
      };
    }
    default:
      return state;
  }
}
