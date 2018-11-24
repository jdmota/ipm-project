export type Ticket = {
  owner: String,
  ticketId: String,
  eventId: String,
  date: Date,
  seat: string | undefined
};

export type User = {
  id: string,
  email: string,
  username: string,
  password: string,
  fullName: string|undefined,
  creditCardNumber: number|undefined,
  dateCreditCard: Date|null,
  cvv: number|undefined,
};

export type EventComment = {
  author: string,
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
  type: "Concert" | "Theater" | "Festival" | "Other",
  location: string,
  comments: EventComment[],
  priceUnit: number,
};

export type Picture = {
  id: string,
  url: string
};

