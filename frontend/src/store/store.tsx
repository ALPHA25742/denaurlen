import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
export const store = configureStore({
  reducer: userReducer,
  //reducer: {}, for many diff types of reducers
});
