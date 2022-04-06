import { useDispatch, useSelector } from "./hooks";
import { styled } from "./stitches.config";
import { guessIfPossible } from "./validation";
import { inputLetter } from "./actions";

const keyboardKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "35rem",
  margin: "auto",
});

const Row = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const Key = styled("div", {
  flex: 1,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0.5%",
  height: "min(3rem, 6vh)",
  textAlign: "center",
  border: "1px solid $border",
  borderRadius: "4px",
  color: "$uibackground",
  cursor: "pointer",
  fontSize: "min(max(1rem, 4vw), 16px)",
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

export default function Keyboard() {
  const dispatch = useDispatch();
  const letters = useSelector((state) => state.letters);
  return (
    <Container data-testid="keyboard">
      {keyboardKeys.map((row, i) => (
        <Row key={i}>
          {row.map((key, i) => (
            <Key
              key={i}
              state={letters[key] || "unchecked"}
              title={letters[key] || "unchecked"}
              onClick={() => {
                if (key == "Enter") {
                  dispatch(guessIfPossible());
                } else {
                  dispatch(inputLetter(key));
                }
              }}
            >
              {key}
            </Key>
          ))}
        </Row>
      ))}
    </Container>
  );
}
