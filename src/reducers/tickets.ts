
const initialState = [
  {
    owner: "bestCostumerOnFCTicket",
    ticketId: "1",
    eventId: "1",
    date: new Date( 2019, 7, 11 ),
    seat: undefined
  },
  {
    owner: "theBest",
    ticketId: "2",
    eventId: "1",
    date: new Date( 2019, 7, 12 ),
    seat: undefined
  },
];

let globalId = initialState.length + 1;

export default function( state = initialState, action, loggedInUser ) {
  switch ( action.type ) {
    case "BUY": {
      return [
        ...state,
        ...action.payload.map( ticket => ( {
          ...ticket,
          ticketId: ( globalId++ ) + "",
          owner: loggedInUser.username
        } ) )
      ];
    }
    case "TRADE": {
      return state.map( ticket => {
        if ( ticket.ticketId === action.ticket1.ticketId ) {
          return {
            ...ticket,
            ticketId: ( globalId++ ) + "",
            owner: action.ticket2.owner
          };
        }
        if ( ticket.ticketId === action.ticket2.ticketId ) {
          return {
            ...ticket,
            ticketId: ( globalId++ ) + "",
            owner: action.ticket1.owner
          };
        }
        return ticket;
      } );
    }
    default:
      return state;
  }
}
