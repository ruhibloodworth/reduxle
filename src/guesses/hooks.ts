import { useEffect } from "react";
import { useDispatch } from "../hooks";
import { actions } from "./guessesSlice";
import { guessIfPossible } from "./validation";

const { inputLetter } = actions;

export const useKeyboardInput = () => {
  const dispatch = useDispatch();
  const downHandler = (e: KeyboardEvent) => {
    const key = e.key;
    if (key.length === 1 && key != " ") {
      // key values for non letters are all longer than 1 character
      // and the answers are all english so we don't have to worry about long unicode characters
      dispatch(inputLetter(key.toUpperCase()));
    } else if (key == "Backspace") {
      dispatch(inputLetter(key));
    } else if (key == "Enter") {
      dispatch(guessIfPossible());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => window.removeEventListener("keydown", downHandler);
  }, []);
};
