import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userSlice from "../slices/userSlice";
import cartSlice from "../slices/cartSlice";
import notificationSlice from "../slices/notificationSlice";

const reducer = combineReducers({
  userSlice,
  cartSlice,
  notificationSlice
});

const store = configureStore({
  reducer,
});

export default store;
