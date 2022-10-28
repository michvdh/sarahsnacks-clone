// import {createSlice} from "@reduxjs/toolkit";

// const initialModalState = {
//   addItemSuccesModal: false,
//   qtyErrorModal: false
// };

// // I don't think I need to use store for my modal
// const modalSlice = createSlice({
//   name: "modal",
//   initialState: initialModalState,
//   reducers: {

//     showAddToCartSuccessModal(state, action) {
//       const showModal = action.payload;
//       state.addItemSuccesModal = showModal;
//     },

//     showQtyErrorModal(state, action) {
//       const showModal = action.payload;
//       state.qtyErrorModal = showModal;
//     }
//   }
// });

// export const modalActions = modalSlice.actions;

// export default modalSlice.reducer;