import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_GUESSES, WORD_LENGTH } from "../constants";

type GameState = "PLAYING" | "WON" | "LOST";
interface GuessesState {
  state: GameState;
  answer: string | null;
  words: string[];
}

const initialState: GuessesState = {
  state: "PLAYING",
  answer: "ABOUT",
  words: [""],
};

const guessesSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    inputLetter: (state, action: PayloadAction<string>) => {
      if (state.state == "PLAYING") {
        const idx = state.words.length - 1;
        if (action.payload == "Backspace") {
          state.words[idx] = state.words[idx].slice(0, -1);
        } else if (state.words[idx].length < WORD_LENGTH) {
          state.words[idx] = state.words[idx] + action.payload;
        }
      }
    },
    guess: (state) => {
      if (state.state == "PLAYING") {
        const idx = state.words.length - 1;
        if (state.words[idx] == state.answer) {
          state.state = "WON";
        } else if (state.words.length < MAX_GUESSES) {
          state.words.push("");
        } else {
          state.state = "LOST";
        }
      }
    },
  },
});

export const { reducer, actions } = guessesSlice;
