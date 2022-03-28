import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { inputLetter } from "./guessesSlice";

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
  extraReducers: (builder) => {
    builder.addCase(inputLetter, (state, action) => {
      if (state !== null) {
        return null;
      } else {
        return state;
      }
    });
  },
});

export const { rejected, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;
