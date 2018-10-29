import { Event } from "./data/types";

let events: Event[] = [
  { id: "1",
    title: "NOS Alive",
    description: "cool",
    date: new Date(),
    images: [],
    type: "festival",
    location: "Alges",
    comments: [],
    priceUnit: 50 }
];

export function search( inputSearch : string ) {
  let inputSearchMin = inputSearch.trim().toUpperCase();
  let inputWords = inputSearchMin.split( " " );
  let resultEvents = events.find( x => x.title.toUpperCase().includes( inputWords. ) );

  return resultEvents;
}
