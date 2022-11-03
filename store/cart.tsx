import { createSlice, current } from "@reduxjs/toolkit";
import {cartStateModel} from  '../model/cartStateModel.model';
// current is used so that we can get the "current state" for debugging


const initialCartState: cartStateModel = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
  expiry: 0, // current time + 24 hours
  ttl: 86400000 // 24 hours = 86400000 ms
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {

    // get cart details from local storage on inital load only
    getCartDetailsFromLocalStorage(state, action) {
      const cartLS = action.payload;
      const now = (new Date()).getTime();

      // remove localStorage cartLS if more than 24hours since last add item AND browser / tab has been refreshed or closed
        // removal happens after user refreshes or re-opens site (even on right click + new tab)
      if ((cartLS.expiry + cartLS.ttl) < now) {
        window.onbeforeunload = () => {
          localStorage.removeItem("cartLS");
          return;
        }
      }

      // if user refreshes or loads the site in a new tab or browser session, and state.expiry is not yet expired, expiry time is refreshed.
      if ((cartLS.expiry + cartLS.ttl) > now) {
        state.expiry = now + state.ttl;
        state.cartItems = cartLS.cartItems;
        state.totalPrice = cartLS.totalPrice;
        state.totalQty = cartLS.totalQty;

        typeof window !== "undefined" &&
        localStorage.setItem("cartLS", JSON.stringify(state));
      }
    },

    addItem(state, action) {
      const newItem = action.payload;
      const now = (new Date()).getTime();

      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          otherName: newItem.otherName,
          varPrice: +newItem.varPrice,
          varSize: newItem.varSize,
          qty: +newItem.qty,
          imagesFolder: newItem.imagesFolder,
          image: newItem.image
        });

      } else {
        existingItem.qty += newItem.qty;
      }

      state.totalQty += newItem.qty;

      if (state.cartItems.length > 0) {
        state.totalPrice = 0;
        state.cartItems.forEach((item) => {
          state.totalPrice += +item.qty * item.varPrice;
        });
      }

      state.expiry = now + state.ttl;

      typeof window !== "undefined" &&
        localStorage.setItem("cartLS", JSON.stringify(state));
    },

    removeItem(state, action) {
      const selectedItemId = action.payload.inputId;
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === selectedItemId
      );
      const selectedItemQty = +state.cartItems[itemIndex].qty;
      const selectedItemPrice = state.cartItems[itemIndex].varPrice;
      const selectedItemTotalPrice = selectedItemQty * selectedItemPrice;

      state.totalQty -= selectedItemQty;
      state.totalPrice -= selectedItemTotalPrice;
      state.cartItems.splice(itemIndex, 1);

      typeof window !== "undefined" &&
        localStorage.setItem("cartLS", JSON.stringify(state));
    },

    adjustItemQty(state, action) {
      const selectedItemId = action.payload.inputId;
      const selectedItemQty = action.payload.inputQty;
      const itemIndex = state.cartItems.findIndex(
        (p) => p.id === selectedItemId
      );

      if (state.cartItems[itemIndex]) {
        const selectedItemPrice = state.cartItems[itemIndex].varPrice;
        const prevItemQty = +state.cartItems[itemIndex].qty;

        if (selectedItemQty > prevItemQty) {
          const difference = selectedItemQty - prevItemQty;
          state.totalQty += difference;
          state.totalPrice += difference * selectedItemPrice;
        }

        if (selectedItemQty < prevItemQty) {
          const difference = prevItemQty - selectedItemQty;
          state.totalQty -= difference;
          state.totalPrice -= difference * selectedItemPrice;
        }

        state.cartItems[itemIndex].qty = selectedItemQty;
      }

      typeof window !== "undefined" &&
        localStorage.setItem("cartLS", JSON.stringify(state));
    },

    checkCart(state) {
      console.log(current(state));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
