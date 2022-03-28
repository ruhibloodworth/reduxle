import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import alert, { rejected } from "./alertSlice";
import { WORD_LENGTH } from "./constants";
import guesses, { guess } from "./guessesSlice";

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
    const idx = state.guesses.words.length - 1;
    if (state.guesses.words[idx].length < WORD_LENGTH) {
      dispatch(rejected("Not enough letters"));
    } else {
      dispatch(guess());
    }
  };
