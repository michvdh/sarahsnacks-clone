import {createSlice} from "@reduxjs/toolkit";

const initialModalState = {
  addItemSuccesModal: false
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showAddToCartSuccessModal(state, action) {
      const showModal = action.payload;
      state.addItemSuccesModal = showModal;
      console.log(showModal);
    }
  }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;