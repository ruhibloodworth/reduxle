import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./test/utils";

/**
 * Return the contents of all the children of row
 * @param row - the row
 * @returns - an array of the textContents of all the children of row
 */
const rowContent = (row: Element): string[] => {
  let values = [];
  let e = row.firstChild;
  while (e !== null) {
    values.push(e.textContent === null ? "" : e.textContent);
    e = e.nextSibling;
  }
  return values;
};

describe("Integration tests", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Reduxle/)).toBeInTheDocument();
  });
  it("displays 6 rows of 5 empty cells", () => {
    render(<App />);
    const rows = screen.queryAllByRole("row");
    expect(rows.length).toEqual(6);
    rows.forEach((row) =>
      expect(rowContent(row)).toEqual([" ", " ", " ", " ", " "])
    );
  });
  it("allows the user to use the keyboard to input a guess", () => {
    render(<App />);
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowContent(firstRow)).toEqual([" ", " ", " ", " ", " "]);
    userEvent.keyboard("ABBOT{Enter}");
    expect(rowContent(firstRow)).toEqual(["A", "B", "B", "O", "T"]);
  });
  it("supports the backspace key", () => {
    render(<App />);
    userEvent.keyboard("ABBOU{Backspace}T{Enter}");
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowContent(firstRow)).toEqual(["A", "B", "B", "O", "T"]);
  });
  it("limits guesses to 5 letters", () => {
    render(<App />);
    userEvent.keyboard("ABBOTS");
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowContent(firstRow)).toEqual(["A", "B", "B", "O", "T"]);
  });
  it("ignores whitespace in words", () => {
    render(<App />);
    userEvent.keyboard("A B{Tab}BOT");
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowContent(firstRow)).toEqual(["A", "B", "B", "O", "T"]);
  });
  it("only accepts 6 guesses", () => {
    render(<App />);
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    const rows = screen.queryAllByRole("row");
    expect(rows.length).toEqual(6);
  });
  it("doesn't allow guesses with less than 5 letters", () => {
    render(<App />);
    userEvent.keyboard("CAT{Enter}");
    expect(screen.getByRole("alert")).toBeInTheDocument();
    userEvent.keyboard("S");
    expect(screen.queryByRole("alert")).toBeNull();
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    const secondRow = firstRow.nextElementSibling as Element;
    expect(rowContent(firstRow)).toEqual(["C", "A", "T", "S", " "]);
    expect(rowContent(secondRow)).toEqual([" ", " ", " ", " ", " "]);
  });
  it("only accepts valid words", () => {
    render(<App />);
    userEvent.keyboard("AAAAA{Enter}");
    expect(screen.getByRole("alert")).toBeInTheDocument();
    userEvent.keyboard("S");
    expect(screen.queryByRole("alert")).toBeNull();
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    const secondRow = firstRow.nextElementSibling as Element;
    expect(rowContent(firstRow)).toEqual(["A", "A", "A", "A", "A"]);
    expect(rowContent(secondRow)).toEqual([" ", " ", " ", " ", " "]);
  });
});
