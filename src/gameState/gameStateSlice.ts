import { createSlice } from "@reduxjs/toolkit";
import { guess, startGame } from "../actions";
import { MAX_GUESSES } from "../constants";
import { GameState } from "../types";

const initialState = GameState.PLAYING;

const gameStateSlice = createSlice({
  name: "GameState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startGame, (state, action) => {
        return initialState;
      })
      .addCase(guess, (state, action) => {
        if (state === GameState.PLAYING) {
          const { isCorrect, No } = action.payload;
          if (isCorrect) {
            return GameState.WON;
          } else if (No === MAX_GUESSES - 1) {
            return GameState.LOST;
          } else {
            return GameState.PLAYING;
          }
        } else {
          return state;
        }
      });
  },
});

export const { reducer, actions } = gameStateSlice;
