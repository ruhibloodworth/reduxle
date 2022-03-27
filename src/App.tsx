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
  return (
    <Container>
      <Header>
        <Title>Reduxle</Title>
      </Header>
      <main>
        <WordGrid
          words={["     ", "     ", "     ", "     ", "     ", "     "]}
        />
      </main>
    </Container>
  );
}
