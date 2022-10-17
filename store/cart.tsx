import { createSlice, current } from "@reduxjs/toolkit";
  // current is used so that we can get the "current state" for debugging

interface cartStateType {
  cartItems: {
    id: string;
    productName: string;
    varPrice: number; // variation price
    varSize: string, // variation size
    qty: number;
  }[];
  totalQty: number;
  totalPrice: number;
}

const initialCartState: cartStateType = {
  cartItems: [
    {id: "p100",
    productName: "Ice Cream",
    varPrice: 13,
    varSize: "1L bucket",
    qty: 1}
  ],
  totalQty: 1, // 0
  totalPrice: 13.00, // 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    
    addItem(state, action) {
      const newItem = action.payload;

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
          state.totalPrice += (item.qty * item.varPrice);
        });
      }
      
    },

    removeItem(state, action) {
      const selectedItemId = action.payload.inputId;
      const itemIndex = state.cartItems.findIndex((p) => p.id === selectedItemId);
      const selectedItemQty = state.cartItems[itemIndex].qty;
      const selectedItemPrice = state.cartItems[itemIndex].varPrice;
      const selectedItemTotalPrice = selectedItemQty * selectedItemPrice;

      state.totalQty -= selectedItemQty;
      state.totalPrice -= selectedItemTotalPrice;
      state.cartItems.splice(itemIndex, 1);
    },

    adjustItemQty(state, action) {
      const selectedItemId = action.payload.inputId;
      const selectedItemQty = action.payload.inputQty;
      const itemIndex = state.cartItems.findIndex((p) => p.id === selectedItemId);

      if (state.cartItems[itemIndex]) {
        const selectedItemPrice = state.cartItems[itemIndex].varPrice;
        const prevItemQty = state.cartItems[itemIndex].qty;

        if (selectedItemQty > prevItemQty) {
          const difference = selectedItemQty - prevItemQty;
          state.totalQty += difference;
          state.totalPrice += (difference * selectedItemPrice);
        }

        if (selectedItemQty < prevItemQty) {
          const difference = prevItemQty - selectedItemQty;
          state.totalQty -= difference;
          state.totalPrice -= (difference * selectedItemPrice) 
        }

        state.cartItems[itemIndex].qty = selectedItemQty;
      }
    },

    checkCart(state) {
      console.log(current(state));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
