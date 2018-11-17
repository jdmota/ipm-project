export function setParamsName( name ) {
  return {
    type: "SET_NAME",
    payload: name
  };
}

export function setParamsFilters( filters ) {
  return {
    type: "SET_FILTERS",
    payload: filters
  };
}
