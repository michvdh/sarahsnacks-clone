import { configureStore } from "@reduxjs/toolkit";

import ioReducer from "./intersectionObserver"

const store = configureStore({
  reducer: {
    io: ioReducer
  }
});

export default store;