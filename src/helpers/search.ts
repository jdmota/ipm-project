import { Event } from "../data/types";

let events: Event[] = [
  {
    id: "1",
    url: "/event/2",
    title: "NOS Alive",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: new Date(),
    images: [],
    type: "festival",
    location: "Alges",
    priceUnit: 50,
    comments: [ {
      author: {
        id: "1",
        mail: "bestcostumer@gmail.com",
        nickname: "Thebest",
        password: "best123",
        firstName: "John",
        lastName: "Smith",
        creditCardNumber: "0000 1111 2222 3333",
        dateCreditCard: new Date( 2020, 5, 20 ),
        cvc: "123"
      },
      data: new Date(),
      text: "Adorei!"
    }, {
      author: {
        id: "2",
        mail: "worstcustomer@gmail.com",
        nickname: "Theworst",
        password: "worst123",
        firstName: "Potatoes",
        lastName: "Smith",
        creditCardNumber: "0000 1111 2222 3333",
        dateCreditCard: new Date( 2020, 5, 20 ),
        cvc: "123"
      },
      data: new Date(),
      text: "Odiei!"
    } ]
  },
  {
    id: "2",
    url: "/event/2",
    title: "A pior comédia do mundo",
    description: "Super funny",
    date: new Date(),
    images: [],
    type: "theater",
    location: "Lisboa",
    comments: [],
    priceUnit: 50
  },
  {
    id: "3",
    url: "/event/3",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [],
    type: "other",
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


export function advancedSearch( types: [], location: string, minPrice: number, maxPrice: number, minDate: Date, maxDate: Date ) {
  let resultEvents = events.filter( event => {
    const title = event.title.toUpperCase();
    return "";// inputWords.some( word => title.includes( word ) );
  } );

  return resultEvents;
}
