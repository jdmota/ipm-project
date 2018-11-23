import { User } from "../data/types";

let globalId = 3;

const userList: User[] = [ {
  id: "1",
  email: "smithRules@gmail.com",
  username: "bestCostumerOnFCTicket",
  password: "1234SmithInTheHouse!",
  fullName: "Stan Smith",
  creditCardNumber: 123,
  dateCreditCard: new Date(),
  cvv: 123,
  ticketList: [
    {
      ticketId: "1",
      eventId: "1",
      date: new Date( 2019, 7, 11 ),
      seat: undefined
    }
  ],
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
  ticketList: [
    {
      ticketId: "2",
      eventId: "1",
      date: new Date( 2019, 7, 12 ),
      seat: undefined
    }
  ],
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
      const user = { ...action.payload, ticketList: [] };
      return {
        ...state,
        userList: [
          ...state.userList,
          user
        ],
        loggedInUser: user
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
              ...action.payload.map( ticket => {
                return { ...ticket, ticketId: ( globalId++ ) + "" };
              } )
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
