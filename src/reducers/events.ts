import { fixPathname } from "../helpers/router";
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
    ].map( fixPathname ),
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
      "/images/aPiorComediaDoMundo/img1.jpg",
      "/images/aPiorComediaDoMundo/img2.jpg"
    ].map( fixPathname ),
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
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Porto",
    comments: [],
    priceUnit: 50
  },
  {
    id: "4",
    url: "/event/4",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Faro",
    comments: [],
    priceUnit: 50
  },
  {
    id: "5",
    url: "/event/5",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Algarve",
    comments: [],
    priceUnit: 50
  },
  {
    id: "6",
    url: "/event/6",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Castelo Branco",
    comments: [],
    priceUnit: 50
  },
  {
    id: "7",
    url: "/event/7",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Évora",
    comments: [],
    priceUnit: 50
  },
  {
    id: "8",
    url: "/event/8",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Serra da Estrela",
    comments: [],
    priceUnit: 50
  },
  {
    id: "9",
    url: "/event/9",
    title: "Escape Room",
    description: "Try your best",
    date: new Date(),
    images: [
      "/images/escapeRooms/wrongOne/wrongOneLogo.jpg",
      "/images/escapeRooms/wrongOne/wrongOne.jpg",
      "/images/escapeRooms/wrongOne/wrongOne2.jpg",
      "/images/escapeRooms/wrongOne/wrongOne3.jpg",
      "/images/escapeRooms/wrongOne/wrongOne4.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Beja",
    comments: [],
    priceUnit: 50
  },
  {
    id: "10",
    url: "/event/10",
    title: "Escape Room",
    description: "Can You Escape?",
    date: new Date(),
    images: [
      "/images/escapeRooms/rightOne/rightOneLogo.jpg",
      "/images/escapeRooms/rightOne/rightOne.jpg",
      "/images/escapeRooms/rightOne/rightOne2.jpg",
      "/images/escapeRooms/rightOne/rightOne3.jpg"
    ].map( fixPathname ),
    type: "Other",
    location: "Almada",
    comments: [],
    priceUnit: 50
  },
];

export default function( state = events, action ) {
  switch ( action.type ) {
    case "COMMENT_EVENT": {
      const eventList = state.map( event => {
        if ( action.eventUrl === event.url ) {
          return {
            ...event,
            comments: [
              action.comment, // Show first
              ...event.comments
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
