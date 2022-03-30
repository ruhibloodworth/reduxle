import { createSlice } from "@reduxjs/toolkit";
import { inputLetter, rejected, startGame } from "../actions";

type AlertState = string | null;

const initialState = null as AlertState;

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    clearAlert: (state) => {
      return null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(startGame, (state, action) => {
        return initialState;
      })
      .addCase(inputLetter, (state, action) => {
        if (state !== null) {
          return null;
        } else {
          return state;
        }
      })
      .addCase(rejected, (state, action) => {
        return action.payload;
      });
  },
});

export const { actions, reducer } = alertSlice;
