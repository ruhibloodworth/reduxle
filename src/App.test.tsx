import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "./test/utils";

describe("Integration tests", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Reduxle/)).toBeInTheDocument();
  });
});
