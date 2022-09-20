import { createSlice } from "@reduxjs/toolkit";

// IO stands for Intersection Observer
const initialIOState = { targetIntersect: false };

const ioSlice = createSlice({
  name: 'io',
  initialState: initialIOState,
  reducers: {
    changeIOState(state, action) {
      state.targetIntersect = action.payload;
    }
  }
});

export const ioActions = ioSlice.actions;

export default ioSlice.reducer;