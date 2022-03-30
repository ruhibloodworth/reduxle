import { createSlice } from "@reduxjs/toolkit";
import { guess, startGame } from "../actions";
import { LetterScore } from "../types";

interface LettersState {
  [key: string]: LetterScore;
}

const initialState = {} as LettersState;

const lettersScoreSlice = createSlice({
  name: "letters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startGame, (state, action) => {
      return initialState;
    });
    builder.addCase(guess, (state, action) => {
      const { word, score } = action.payload;
      for (let i = 0; i < word.length; i++) {
        switch (state[word[i]] || "unchecked") {
          case "unchecked": {
            state[word[i]] = score[i];
            break;
          }
          case "missing": {
            if (score[i] == "misplaced" || score[i] == "correct") {
              state[word[i]] = score[i];
            }
            break;
          }
          case "misplaced": {
            if (score[i] == "correct") {
              state[word[i]] = score[i];
            }
            break;
          }
          case "correct": {
            break;
          }
        }
      }
    });
  },
});

export const { reducer } = lettersScoreSlice;
