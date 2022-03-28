import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import alert, { rejected } from "./alertSlice";
import { WORD_LENGTH } from "./constants";
import guesses, { guess } from "./guessesSlice";
import validWords from "./validWords.json";

export const config = {
  reducer: {
    alert,
    guesses,
  },
};

export const store = configureStore(config);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const guessIfPossible =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    const state = getState();
    const word = state.guesses.words[state.guesses.words.length - 1];
    if (word.length < WORD_LENGTH) {
      dispatch(rejected("Not enough letters"));
    } else if (!validWords.includes(word)) {
      dispatch(rejected("Not in the list of words"));
    } else {
      dispatch(guess());
    }
  };
