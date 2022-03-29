import { AlertNotification } from "./alerts";
import { styled } from "./stitches.config";
import {
  actions,
  possibleAnswers,
  useKeyboardInput,
  Dialog,
  WordGrid,
} from "./guesses";
import { useDispatch } from "./hooks";
import { useEffect } from "react";

const { startGame } = actions;

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
  useEffect(() => {
    dispatch(
      startGame(
        possibleAnswers[
          Math.floor(Math.random() * (possibleAnswers.length - 1))
        ]
      )
    );
  }, []);

  useKeyboardInput();
  return (
    <>
      <AlertNotification />
      <Dialog />
      <Container>
        <Header>
          <Title>Reduxle</Title>
        </Header>
        <main>
          <WordGrid />
        </main>
      </Container>
    </>
  );
}
