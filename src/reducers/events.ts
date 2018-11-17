import { Event } from "../data/types";

const events: Event[] = [
  {
    id: "1",
    url: "/event/2",
    title: "NOS Alive",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: new Date(),
    images: [],
    type: "Festival",
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
    type: "Theater",
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
    type: "Other",
    location: "Almada",
    comments: [],
    priceUnit: 50
  }
];

export default function( state = events, action ) {
  return state;
}
