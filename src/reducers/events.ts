import { Event } from "../data/types";

const events: Event[] = [
  {
    id: "1",
    url: "/event/1",
    title: "NOS Alive",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: new Date(),
    images: [
      "/images/NOS/nos_alive_4.jpg",
      "/images/NOS/nos_alive_1.jpg",
      "/images/NOS/nos_alive_2.jpg",
      "/images/NOS/nos_alive_3.jpg"
    ],
    type: "Festival",
    location: "Alges",
    priceUnit: 50,
    comments: [ {
      author: "Thebest",
      data: new Date(),
      text: "Adorei!"
    }, {
      author: "Theworst",
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
    images: [
      "/images/aPiorComediaDoMundo/img1.jpg"
    ],
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
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.png",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ],
    type: "Other",
    location: "Almada",
    comments: [],
    priceUnit: 50
  },
  {
    id: "4",
    url: "/event/4",
    title: "Escape Room",
    description: "Can You Escape?",
    date: new Date(),
    images: [
      "/images/escapeRooms/rightOne/rightOneLogo.jpg",
      "/images/escapeRooms/rightOne/rightOne.jpg",
      "/images/escapeRooms/rightOne/rightOne2.jpg",
      "/images/escapeRooms/rightOne/rightOne3.jpg"
    ],
    type: "Other",
    location: "Almada",
    comments: [],
    priceUnit: 50
  }
];

export default function( state = events, action ) {
  switch ( action.type ) {
    case "COMMENT_EVENT":
    {
      const eventList = state.map( event => {
        if ( action.eventurl === event.url ) {
          return {
            ...event,
            comments: [
              ...event.comments,
              action.comment
            ]
          };
        }
        return event;
      } );
      return eventList;
    }
    default:
      return state;
  }
}
