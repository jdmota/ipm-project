const initialState = {
  name: "Claudio",
  type: "Any",
  minPrice: 0,
  maxPrice: 1000,
  starterDate: new Date( 2018, 1, 1, 0, 0, 0, 0 ),
  endDate: new Date( 2019, 12, 31, 23, 59, 59, 0 )
};

export default function( state = initialState, action ) {
  switch ( action.type ) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "SET_FILTERS":
      return {
        state
      };
    default:
      return state;
  }
}
