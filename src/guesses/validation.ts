import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { rejected } from "../actions";
import { WORD_LENGTH } from "../constants";
import { actions } from "./guessesSlice";
import { RootState } from "../store";
import validWords from "./validWords.json";

const { guess } = actions;

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
