import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const createStoreWithMiddleware = applyMiddleware()( createStore );
const store = createStoreWithMiddleware( reducers );

console.log( store.getState() );

export default store;
