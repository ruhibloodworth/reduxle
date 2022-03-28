import { useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch as useGenericDispatch,
  useSelector as useGenericSelector,
} from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useDispatch = () => useGenericDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useGenericSelector;

export const useKeyboardInput = (
  onInput: (letter: string) => any,
  onGuess: () => any
) => {
  const downHandler = (e: KeyboardEvent) => {
    const key = e.key;
    if (key.length === 1 && key != " ") {
      // key values for non letters are all longer than 1 character
      // and the answers are all english so we don't have to worry about long unicode characters
      onInput(key.toUpperCase());
    } else if (key == "Backspace") {
      onInput(key);
    } else if (key == "Enter") {
      onGuess();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => window.removeEventListener("keydown", downHandler);
  }, []);
};
