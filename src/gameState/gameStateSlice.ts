import { createSlice } from "@reduxjs/toolkit";
import { guess, startGame } from "../actions";
import { MAX_GUESSES } from "../constants";
import { GameStatus } from "../types";

interface State {
  status: GameStatus;
  statistics: {
    failed: number;
    [No: number]: number;
  };
}

const initialState = {
  status: GameStatus.PLAYING,
  statistics: {
    failed: 0,
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  },
} as State;

const gameStateSlice = createSlice({
  name: "GameState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startGame, (state, action) => {
        state.status = GameStatus.PLAYING;
      })
      .addCase(guess, (state, action) => {
        if (state.status === GameStatus.PLAYING) {
          const { isCorrect, No } = action.payload;
          if (isCorrect) {
            state.status = GameStatus.WON;
            state.statistics[No + 1] += 1;
          } else if (No === MAX_GUESSES - 1) {
            state.status = GameStatus.LOST;
            state.statistics.failed += 1;
          }
        }
      });
  },
});

export const { reducer, actions } = gameStateSlice;
