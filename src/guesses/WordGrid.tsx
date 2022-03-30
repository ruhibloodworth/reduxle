import { FC } from "react";
import { MAX_GUESSES, WORD_LENGTH } from "../constants";
import { useSelector } from "../hooks";
import { styled } from "../stitches.config";
import { Unchecked } from "./guessesSlice";

const Table = styled("table", {
  borderCollapse: "separate",
  borderSpacing: "0.5rem",
  margin: "auto",
});

const Cell = styled("td", {
  height: "4rem",
  width: "4rem",
  border: "1px solid $border",
  verticalAlign: "center",
  textAlign: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "$uibackground",
  variants: {
    state: {
      unchecked: {
        color: "$text",
        backgroundColor: "$uibackground",
      },
      correct: {
        backgroundColor: "$correct",
      },
      misplaced: {
        backgroundColor: "$misplaced",
      },
      missing: {
        backgroundColor: "$missing",
      },
    },
  },
});

const WordRow: FC<{ idx: number }> = ({ idx }) => {
  const word = useSelector((state) => state.guesses.words[idx] ?? "");
  const score = useSelector((state) => state.guesses.scores[idx] ?? Unchecked);
  return (
    <tr role="row">
      {word
        .padEnd(WORD_LENGTH)
        .split("")
        .map((letter, i) => {
          return (
            <Cell key={i} role="cell" state={score[i]} title={score[i]}>
              {letter}
            </Cell>
          );
        })}
    </tr>
  );
};

export default function WordGrid() {
  return (
    <Table>
      <tbody data-testid="wordgrid-body">
        {[...Array(MAX_GUESSES)].map((_unused, i) => (
          <WordRow key={i} idx={i} />
        ))}
      </tbody>
    </Table>
  );
}
