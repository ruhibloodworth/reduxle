import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MAX_GUESSES, WORD_LENGTH } from "../constants";

type GameState = "PLAYING" | "WON" | "LOST";

export type LetterScore = "unchecked" | "correct" | "misplaced" | "missing";

export const Unchecked: LetterScore[] = new Array(WORD_LENGTH).fill(
  "unchecked"
);

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

interface GuessesState {
  state: GameState;
  answer: string | null;
  words: string[];
  scores: LetterScore[][];
}

const initialState: GuessesState = {
  state: "PLAYING",
  answer: null,
  words: [""],
  scores: [],
};

const guessesSlice = createSlice({
  name: "guesses",
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<string>) => {
      state = { ...initialState };
      state.answer = action.payload;
      return state;
    },
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
      if (state.state == "PLAYING" && state.answer !== null) {
        const idx = state.words.length - 1;
        const [isCorrect, score] = scoreGuess(state.words[idx], state.answer);
        state.scores.push(score);
        if (isCorrect) {
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
