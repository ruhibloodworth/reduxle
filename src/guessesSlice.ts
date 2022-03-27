import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface GuessesState {
  words: string[];
}

const initialState: GuessesState = { words: [""] };

export const guessesSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    inputLetter: (state, action: PayloadAction<string>) => {
      const idx = state.words.length - 1;
      state.words[idx] = state.words[idx] + action.payload;
    },
    guess: (state) => {
      state.words.push("");
    },
  },
});

export const { inputLetter, guess } = guessesSlice.actions;

export default guessesSlice.reducer;
