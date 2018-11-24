import store from "../data/store";

// It's ugly I know, but the events never change, so no problem
const { events } = store.getState();

export function getEventByUrl( url ) {
  return events.find( e => e.url === url );
}

export function search( inputSearch: string ) {
  const inputSearchMin = inputSearch.trim().toUpperCase();
  const inputWords = inputSearchMin.split( /\s+/ );
  const resultEvents = events.filter( event => {
    const title = event.title.toUpperCase();
    return inputWords.some( word => title.includes( word ) );
  } );

  return resultEvents;
}

export function advancedSearch(
  inputSearch: string,
  types: string[],
  location: string,
  minPrice: number,
  maxPrice: number,
  minDate: Date,
  maxDate: Date
) {
  const foundEvents = search( inputSearch );
  const resultEvents = foundEvents.filter( event => {
    return types.indexOf( event.type ) > -1 &&
      event.location.toUpperCase().includes( location.trim().toUpperCase() ) &&
      minPrice <= event.priceUnit &&
      maxPrice >= event.priceUnit &&
      minDate <= event.date &&
      maxDate >= event.date;
  } );

  return resultEvents;
}
