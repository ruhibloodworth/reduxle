import { startGame } from "./actions";
import { possibleAnswers } from "./answer";
import { AlertNotification } from "./alerts";
import { styled } from "./stitches.config";
import { Dialog } from "./gameState";
import { WordGrid } from "./guesses";
import { useKeyboardInput, useDispatch, useSelector } from "./hooks";
import { useEffect } from "react";
import Keyboard from "./Keyboard";

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
  const answer = useSelector((state) => state.answer);
  useEffect(() => {
    if (answer === null) {
      dispatch(
        startGame(
          possibleAnswers[
            Math.floor(Math.random() * (possibleAnswers.length - 1))
          ]
        )
      );
    }
  }, [answer]);

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
      <Keyboard />
    </>
  );
}
