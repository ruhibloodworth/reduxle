import { guess, inputLetter } from "./guessesSlice";
import { useDispatch, useKeyboardInput } from "./hooks";
import { styled } from "./stitches.config";
import WordGrid from "./WordGrid";

const Container = styled("div", {
  maxWidth: "30rem",
  margin: "auto",
});

const Header = styled("header", {
  textAlign: "center",
  borderBottom: "1px solid $border",
});

const Title = styled("h1", {
  margin: "0.5rem",
  color: "$text",
});

export default function App() {
  const dispatch = useDispatch();
  useKeyboardInput(
    (letter) => dispatch(inputLetter(letter)),
    () => dispatch(guess())
  );
  return (
    <Container>
      <Header>
        <Title>Reduxle</Title>
      </Header>
      <main>
        <WordGrid />
      </main>
    </Container>
  );
}
