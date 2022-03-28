import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_GUESSES, WORD_LENGTH } from "./constants";

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
      if (action.payload == "Backspace") {
        state.words[idx] = state.words[idx].slice(0, -1);
      } else if (state.words[idx].length < WORD_LENGTH) {
        state.words[idx] = state.words[idx] + action.payload;
      }
    },
    guess: (state) => {
      if (state.words.length < MAX_GUESSES) {
        state.words.push("");
      }
    },
  },
});
export const { guess, inputLetter } = guessesSlice.actions;

export default guessesSlice.reducer;
