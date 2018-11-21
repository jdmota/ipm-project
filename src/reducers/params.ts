const initialState = {
  name: "",
  type: [ "Festival", "Concert", "Theater" ],
  location: "None",
  minPrice: 0,
  maxPrice: 1000,
  startDate: new Date( 2018, 0, 1, 0, 0, 0, 0 ), // Month index is 0-based
  endDate: new Date( 2019, 11, 31, 23, 59, 59, 0 ) // Month index is 0-based
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
        ...action.payload
      };
    default:
      return state;
  }
}
