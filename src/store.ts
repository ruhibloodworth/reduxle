import { configureStore } from "@reduxjs/toolkit";
import { reducer as alert } from "./alerts";
import { reducer as guesses } from "./guesses";

export const config = {
  reducer: {
    alert,
    guesses,
  },
};

export const store = configureStore(config);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
