import { User } from "../data/types";

const userList: User[] = [
  {
    id: "1",
    email: "smithRules@gmail.com",
    username: "bestCostumer",
    password: "1234Smith",
    fullName: "John Smith",
    creditCardNumber: 123,
    dateCreditCard: new Date(),
    cvv: 123,
  },
  {
    id: "2",
    email: "bestcostumer@gmail.com",
    username: "theBest",
    password: "best123",
    fullName: "Stan Smith",
    creditCardNumber: 3210,
    dateCreditCard: new Date( 2020, 5, 20 ),
    cvv: 2310,
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
  },
  {
    id: "4",
    email: "carolinewhatelse@gmail.com",
    username: "Caroline123",
    password: "Caroline1997",
    fullName: "Caroline Smith",
    creditCardNumber: 12454567894,
    dateCreditCard: new Date( 2020, 5, 20 ),
    cvv: 1235460
  }
];

const initialState = {
  userList,
  loggedInUser: null // userList[ 0 ]
};

export default function( state = initialState, action ) {
  switch ( action.type ) {
    case "ADD_USER": {
      const user = { ...action.payload };
      return {
        ...state,
        userList: [
          ...state.userList,
          user
        ],
        loggedInUser: user
      };
    }
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
