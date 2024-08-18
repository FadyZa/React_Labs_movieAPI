import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinedReducers from "./combinedReducers";
import { thunk } from "redux-thunk";

export const myStore = createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));

