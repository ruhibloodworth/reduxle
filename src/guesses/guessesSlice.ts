import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { guess, inputLetter, startGame } from "../actions";
import { MAX_GUESSES, WORD_LENGTH } from "../constants";
import { LetterScore } from "../types";

export const Unchecked: LetterScore[] = new Array(WORD_LENGTH).fill(
  "unchecked"
);

interface GuessesState {
  words: string[];
  scores: LetterScore[][];
}

const initialState: GuessesState = {
  words: [""],
  scores: [],
};

const guessesSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startGame, (state, action) => {
        return initialState;
      })
      .addCase(guess, (state, actions) => {
        state.scores.push(actions.payload.score);
        if (state.words.length < MAX_GUESSES) {
          state.words.push("");
        }
      })
      .addCase(inputLetter, (state, action: PayloadAction<string>) => {
        const idx = state.words.length - 1;
        if (action.payload == "Backspace") {
          state.words[idx] = state.words[idx].slice(0, -1);
        } else if (state.words[idx].length < WORD_LENGTH) {
          state.words[idx] = state.words[idx] + action.payload;
        }
      });
  },
});

export const { reducer, actions } = guessesSlice;
