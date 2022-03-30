import { createSlice } from "@reduxjs/toolkit";
import { startGame } from "../actions";

type AnswerState = string | null;

const initialState = null as AnswerState;

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGame, (state, action) => {
      return action.payload;
    });
  },
});

export const { reducer, actions } = answerSlice;
