import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLayer: false,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    hamburger: (state) => {
      state.showLayer = !state.showLayer;
    },
    setShowLayer(state, action) {
      state.showLayer = action.payload;
    },
  },
});

export const { hamburger, setShowLayer } = counterSlice.actions;
