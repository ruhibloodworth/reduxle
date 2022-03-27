import { gray, tomato } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

const namedColors = {
  background: "$gray1",
  border: "$gray7",
  text: "$gray12",
};

export const { styled, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...tomato,
      ...namedColors,
    },
  },
});
