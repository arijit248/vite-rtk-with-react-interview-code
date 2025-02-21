import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
  data: [],
};

const CountSelector = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    getData: (state, value) => {
      state.data = value.payload;
    },
  },
});

export const { increment, decrement, getData } = CountSelector.actions;
export default CountSelector.reducer;
