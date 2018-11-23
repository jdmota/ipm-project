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
},
{
  id: "2",
  email: "bestcostumer@gmail.com",
  username: "theBest",
  password: "best123",
  fullName: "John Smith",
  creditCardNumber: 3210,
  dateCreditCard: new Date( 2020, 5, 20 ),
  cvv: 2310,
  ticketList: [],
},
{
  id: "3",
  email: "worstcustomer@gmail.com",
  username: "theWorst",
  password: "worst123",
  fullName: "Die Potato",
  creditCardNumber: 1230,
  dateCreditCard: new Date( 2020, 5, 20 ),
  cvv: 1230,
  ticketList: [],
},
];

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
