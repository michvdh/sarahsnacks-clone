import { configureStore } from "@reduxjs/toolkit";

import ioReducer from "./intersectionObserver"
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    io: ioReducer,
    cart: cartReducer
  }
});

export default store;