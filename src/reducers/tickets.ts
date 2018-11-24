const tradingTickets = [
  {
    username: "theBest",
    ticketId: "2"
  },
];

export default function( state = tradingTickets, action ) {
  switch ( action.type ) {
    case "TICKET_ADD":
      return state;
    case "TICKET_REMOVE":
      return state;
    default:
      return state;
  }
}
