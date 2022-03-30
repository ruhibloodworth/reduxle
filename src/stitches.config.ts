import { grass, gray, orange, tomato, whiteA } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const namedColors = {
  background: "$gray1",
  uibackground: "$gray2",
  border: "$gray7",
  text: "$gray12",
  uierrorbackground: "$tomato4",
  uierrorborder: "$tomato8",
  overlay: "$whiteA11",
  correct: "$grass9",
  misplaced: "$orange9",
  missing: "$gray9",
};

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...grass,
      ...gray,
      ...orange,
      ...tomato,
      ...whiteA,
      ...namedColors,
    },
  },
});
