import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import * as reducers from "./exports";

let store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default store;
