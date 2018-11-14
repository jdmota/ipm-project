/* export default function() {
  return {
    name: "",
    type: "Any",
    minPrice: 0,
    maxPrice: 1000,
    starterDate: new Date( 2018, 1, 1, 0, 0, 0, 0 ),
    endDate: new Date( 2019, 12, 31, 23, 59, 59, 0 )
  };
}*/

export default function( state = null, action ) {
  switch ( action.type ) {
    case "SET_PARAMS":
      return action.payload;
  }

  return state;
}
