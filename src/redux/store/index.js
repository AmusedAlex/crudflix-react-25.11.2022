import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";

const bigReducer = combineReducers({
  search: searchReducer,
});

export const store = configureStore({
  reducer: bigReducer,
});
