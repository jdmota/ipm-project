import { Event } from "../data/types";

export const events: Event[] = [
  {
    id: "1",
    url: "/event/1",
    title: "NOS Alive",
    description: "cool",
    date: new Date(),
    images: [],
    type: "Festival",
    location: "Alges",
    comments: [],
    priceUnit: 50
  },
  {
    id: "2",
    url: "/event/1",
    title: "A pior comédia do mundo",
    description: "Super funny",
    date: new Date(),
    images: [],
    type: "Theater",
    location: "Lisboa",
    comments: [],
    priceUnit: 50
  },
  {
    id: "3",
    url: "/event/1",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [],
    type: "Other",
    location: "Almada",
    comments: [],
    priceUnit: 50
  }
];

export function search( inputSearch: string ) {
  let inputSearchMin = inputSearch.trim().toUpperCase();
  let inputWords = inputSearchMin.split( /\s+/ );
  let resultEvents = events.filter( event => {
    const title = event.title.toUpperCase();
    return inputWords.some( word => title.includes( word ) );
  } );

  return resultEvents;
}

export function advancedSearch( inputSearch: string, types: [], location: string, minPrice: number, maxPrice: number, minDate: Date, maxDate: Date ) {
  let foundEvents = search( inputSearch );
  let resultEvents = foundEvents.filter( event => {
    return (
      types.indexOf( event.type ) > -1
    );
  } );

  return resultEvents;
}
