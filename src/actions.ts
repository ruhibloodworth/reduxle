import { createAction } from "@reduxjs/toolkit";
import { LetterScore } from "./types";

export const guess = createAction<{
  No: number;
  word: string;
  isCorrect: boolean;
  score: LetterScore[];
}>("guess");

export const rejected = createAction<string>("rejected");

export const startGame = createAction<string>("startGame");
