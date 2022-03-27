import { FC } from "react";
import { styled } from "./stitches.config";

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
  color: "text",
  backgroundColor: "$uibackground",
});

const WordRow: FC<{ word: string }> = ({ word }) => (
  <tr role="row">
    {word.split("").map((letter, i) => {
      return (
        <Cell key={i} role="cell">
          {letter}
        </Cell>
      );
    })}
  </tr>
);

const WordGrid: FC<{ words: string[] }> = ({ words }) => (
  <Table>
    <tbody data-testid="wordgrid-body">
      {words.map((word, i) => (
        <WordRow key={i} word={word} />
      ))}
    </tbody>
  </Table>
);

export default WordGrid;
