export function addUser( user ) {
  return {
    type: "ADD_USER",
    payload: user
  };
}

export function loginUser( user ) {
  return {
    type: "LOGIN_USER",
    payload: user
  };
}

export function logoutUser() {
  return {
    type: "LOGOUT_USER"
  };
}

export function buy( tickets ) {
  return {
    type: "BUY",
    payload: tickets
  };
}

export function trade( tickets ) {
  return {
    type: "TRADE",
    ticket1: tickets.ticket1,
    ticket2: tickets.ticket2
  };
}
