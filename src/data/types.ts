export type User = {
  id: string,
  mail: string,
  nickname: string,
  password: string,
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  dateCreditCard: Date,
  cvc: string
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

