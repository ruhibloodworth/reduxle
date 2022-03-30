import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { guess, rejected } from "./actions";
import { WORD_LENGTH } from "./constants";
import { RootState } from "./store";
import { LetterScore } from "./types";
import validWords from "./guesses/validWords.json";

const indicesOf = (letter: string, word: string) => {
  let indices = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      indices.push(i);
    }
  }
  return indices;
};

/**
 * Returns whether or not user user's guess is correct and a score showing which letters
 * of the guess are in the answer
 * @param guess - the user's guess
 * @param answer - the secret word
 * @returns [isCorrect, score[]]
 */
export const scoreGuess = (
  guess: string,
  answer: string
): [boolean, LetterScore[]] => {
  let scores: LetterScore[] = [];
  let isCorrect = guess.length == answer.length;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] == answer[i]) {
      scores.push("correct");
    } else {
      isCorrect = false;
      const answerIdxs = indicesOf(guess[i], answer);
      if (answerIdxs.length === 0) {
        scores.push("missing");
      } else {
        const guessIdxs = indicesOf(guess[i], guess);
        const excess = guessIdxs.length - answerIdxs.length;
        if (excess <= 0) {
          // if there aren't any extra instances in the guess,
          // then any which don't match are misplaced
          scores.push("misplaced");
        } else {
          const unmatched = guessIdxs.filter(
            (idx) => !answerIdxs.includes(idx)
          );
          if (unmatched.length === excess) {
            // all the letter instances in the answer are accounted for
            // so the ones in the guess are missing
            scores.push("missing");
          } else {
            // some of the instances in the answer are misplaced in the guess
            // account for the misplaced instances and mark the rest missing
            if (unmatched.indexOf(i) <= excess) {
              scores.push("misplaced");
            } else {
              scores.push("missing");
            }
          }
        }
      }
    }
  }

  return [isCorrect, scores];
};

export const guessIfPossible =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch, getState) => {
    const state = getState();
    if (state.answer !== null) {
      const idx = state.guesses.words.length - 1;
      const word = state.guesses.words[idx];
      if (word.length < WORD_LENGTH) {
        dispatch(rejected("Not enough letters"));
      } else if (!validWords.includes(word)) {
        dispatch(rejected("Not in the list of words"));
      } else {
        const [isCorrect, score] = scoreGuess(word, state.answer);
        dispatch(guess({ No: idx, word, isCorrect, score }));
      }
    }
  };
