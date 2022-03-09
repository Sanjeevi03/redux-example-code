import { combineReducers, createStore } from "redux";
import FormReducers from "./reducers/FormReducers";

const store = createStore(
  combineReducers({
    FormReducers,
  })
);

export default store;
