import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // Example slice

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
