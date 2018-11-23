export type Ticket = {
  id: String,
  eventId: string,
};

export type User = {
  id: string,
  email: string,
  username: string,
  password: string,
  fullName: string|null,
  creditCardNumber: number|null,
  dateCreditCard: Date|null,
  cvv: number|null,
  ticketList: Ticket[]
};

export type EventComment = {
  author: User,
  text: string,
  data: Date,
};

export type Event = {
  id: string,
  url: string,
  title: string,
  description: string,
  date: Date,
  images: string[],
  type: "Concert"| "Theater" | "Festival" | "Other",
  location: string,
  comments: EventComment[],
  priceUnit: number,
};

export type Picture = {
  id: string,
  url: string
};

