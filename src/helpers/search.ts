import store from "../data/store";

// It's ugly I know, but the events never change, so no problem
const { events } = store.getState();

export function getEventByUrl( url ) {
  return events.find( e => e.url === url );
}

function matchesText( _input: string, _string: string, relevance: number, returnTrueIfEmpty?: boolean ): boolean {
  const input = _input.trim().toUpperCase();
  if ( input.length === 0 ) {
    return !!returnTrueIfEmpty;
  }
  const string = _string.trim().toUpperCase();
  const inputWords = input.split( /\s+/ );
  return inputWords.some( word => word.length > relevance && string.includes( word ) );
}

export function search( input: string ) {
  return events.filter( event => matchesText( input, event.title, 3 ) );
}

export function advancedSearch(
  input: string,
  types: string[],
  location: string,
  minPrice: number,
  maxPrice: number,
  minDate: Date,
  maxDate: Date
) {
  return events.filter( event => {
    return types.indexOf( event.type ) > -1 &&
      matchesText( input, event.title, 3, true ) &&
      matchesText( location, event.location, 3, true ) &&
      minPrice <= event.priceUnit &&
      maxPrice >= event.priceUnit &&
      minDate <= event.date &&
      maxDate >= event.date;
  } );
}
