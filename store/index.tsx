import { configureStore } from "@reduxjs/toolkit";

import ioReducer from "./intersectionObserver"
import cartReducer from "./cart";
import modalReducer from "./modal";

const store = configureStore({
  reducer: {
    io: ioReducer,
    cart: cartReducer,
    modal: modalReducer
  }
});

export default store;