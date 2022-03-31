import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useDispatch } from "react-redux";
import { startGame } from "../actions";
import { possibleAnswers } from "../answer";
import { useSelector } from "../hooks";
import { styled } from "../stitches.config";
import { GameState } from "../types";

const StyledOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: "$overlay",
  position: "fixed",
  inset: 0,
});

const StyledContent = styled(AlertDialog.Content, {
  backgroundColor: "$background",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "10rem",
  left: 0,
  right: 0,
  margin: "0 auto",
  width: "25rem",
  padding: 25,
});

const StyledTitle = styled(AlertDialog.Title, {
  margin: 0,
  fontSize: 20,
  fontWeight: "bold",
  fontFamily: "sans-serif",
  color: "$text",
});

const StyledDescription = styled(AlertDialog.Description, {});

const StyledAction = styled(AlertDialog.Action, {
  all: "unset",
  backgroundColor: "$grass2",
  padding: "0.5rem 0.75rem",
  border: "1px solid $border",
  borderRadius: 5,
  cursor: "pointer",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "$grass4",
  },
});

export default function Dialog() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.gameState);
  const answer = useSelector((state) => state.answer);
  return (
    <AlertDialog.Root
      open={gameState !== GameState.PLAYING}
      onOpenChange={(open) => {}}
    >
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledTitle>
            {gameState === GameState.WON ? "You Won!!" : "You Lost :("}
          </StyledTitle>
          <StyledDescription>The secret word was {answer}</StyledDescription>
          <StyledAction
            onClick={() =>
              dispatch(
                startGame(
                  possibleAnswers[
                    Math.floor(Math.random() * (possibleAnswers.length - 1))
                  ]
                )
              )
            }
          >
            New Game
          </StyledAction>
        </StyledContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
