import { configureStore } from "@reduxjs/toolkit";
import starWarsReducer from "./slices/starWarsSlice";

export const store = configureStore({
  reducer: {
    starWars: starWarsReducer,
  },
});
