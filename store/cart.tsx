import { createSlice, current } from "@reduxjs/toolkit";
// current is used so that we can get the "current state" for debugging

interface cartStateType {
  cartItems: {
    id: string;
    productName: string;
    varPrice: number; // variation price
    varSize: string; // variation size
    qty: number | string;
  }[];
  totalQty: number;
  totalPrice: number;
  expiry: number;
  ttl: number;
}


// const initialCartState: cartStateType = cartLS
//   ? cartLS
//   : {
//       cartItems: [],
//       totalQty: 0,
//       totalPrice: 0,
//     };

const initialCartState: cartStateType = {
  cartItems: [],
  totalQty: 0,
  totalPrice: 0,
  expiry: 0,
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

      console.log(cartLS.expiry);
      console.log(now);
      // console.log(cartLS);

      if ((cartLS.expiry + cartLS.ttl) < now) {
        localStorage.removeItem("cartLS");
        return;
      }

      state.cartItems = cartLS.cartItems;
      state.totalPrice = cartLS.totalPrice;
      state.totalQty = cartLS.totalQty;
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
          varPrice: +newItem.varPrice,
          varSize: newItem.varSize,
          qty: +newItem.qty,
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
