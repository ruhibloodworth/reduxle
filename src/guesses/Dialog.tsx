import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { useSelector } from "../hooks";
import { styled } from "../stitches.config";

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

export default function Dialog() {
  const gameState = useSelector((state) => state.guesses.state);
  return (
    <AlertDialog.Root
      open={gameState !== "PLAYING"}
      onOpenChange={(open) => {}}
    >
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledTitle>
            {gameState === "WON" ? "You Won!!" : "You Lost :("}
          </StyledTitle>
        </StyledContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
