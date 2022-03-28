import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      } else {
        state.words[idx] = state.words[idx] + action.payload;
      }
    },
    guess: (state) => {
      state.words.push("");
    },
  },
});

export const { inputLetter, guess } = guessesSlice.actions;

export default guessesSlice.reducer;
