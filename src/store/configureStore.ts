import { createStore, combineReducers, Store, Reducer } from "redux";

import todo from "./todo";

const rootReducer: Reducer = combineReducers({
  todo,
});

const store: Store = createStore(rootReducer);

export default store;
