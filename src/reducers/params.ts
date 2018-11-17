const initialState = {
  name: "",
  type: [ "Festival", "Concert", "Theater" ],
  location: "None",
  minPrice: 0,
  maxPrice: 100000000,
  startDate: new Date( 2018, 0, 1, 0, 0, 0, 0 ),
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
        ...state,
        type: action.payload.type,
        location: action.payload.location,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate
      };
    default:
      return state;
  }
}
