import { configureStore } from "@reduxjs/toolkit";
import guesses from "./guessesSlice";

export const config = {
  reducer: {
    guesses,
  },
};

export const store = configureStore(config);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
