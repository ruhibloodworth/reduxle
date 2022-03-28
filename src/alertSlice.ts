import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AlertState = string | null;

const initialState = null as AlertState;

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    rejected: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    clearAlert: (state) => {
      return null;
    },
  },
});

export const { rejected, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
