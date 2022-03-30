import { configureStore } from "@reduxjs/toolkit";
import { reducer as alert } from "./alerts";
import { reducer as answer } from "./answer";
import { reducer as gameState } from "./gameState";
import { reducer as guesses } from "./guesses";
import { reducer as letters } from "./letters";
export const config = {
  reducer: {
    answer,
    alert,
    gameState,
    guesses,
    letters,
  },
};

export const store = configureStore(config);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
