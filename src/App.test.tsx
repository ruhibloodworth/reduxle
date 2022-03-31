import { getByText } from "@testing-library/dom";
import { beforeAll, describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./test/utils";

let originalRandom = Math.random;

beforeAll(() => {
  Math.random = () => 0;
});

afterAll(() => {
  Math.random = originalRandom;
});

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

const rowTitles = (row: Element): string[] => {
  let values = [];
  let e = row.firstChild;
  while (e !== null) {
    values.push((e as HTMLElement).title);
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
    const rows = screen.queryAllByRole("row", { hidden: true });
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
  it("displays a dialog when the user correctly guesses the word", () => {
    render(<App />);
    userEvent.keyboard("ABACK{Enter}");
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
    expect(screen.getByText(/Won/)).toBeInTheDocument();
    expect(screen.getByText(/ABACK/)).toBeInTheDocument();
  });
  it("display a dialog when the user doesn't guess the word in time", () => {
    render(<App />);
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    userEvent.keyboard("ABBOT{Enter}");
    expect(screen.getByRole("alertdialog")).toBeInTheDocument();
    expect(screen.getByText(/Lost/)).toBeInTheDocument();
    expect(screen.getByText(/ABACK/)).toBeInTheDocument();
  });
  it("scores the guess", () => {
    render(<App />);
    userEvent.keyboard("ABBOT{Enter}");
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowTitles(firstRow)).toEqual([
      "correct",
      "correct",
      "missing",
      "missing",
      "missing",
    ]);
  });
  it("renders the onscreen keyboard", () => {
    render(<App />);
    const keyboard = screen.getByTestId("keyboard");
    expect(getByText(keyboard, "A")).toBeInTheDocument();
    expect(getByText(keyboard, "B")).toBeInTheDocument();
    expect(getByText(keyboard, "C")).toBeInTheDocument();
    expect(getByText(keyboard, "D")).toBeInTheDocument();
    expect(getByText(keyboard, "Enter")).toBeInTheDocument();
    expect(getByText(keyboard, "Backspace")).toBeInTheDocument();
  });
  it("responds to the onscreen keyboard", () => {
    render(<App />);
    const keyboard = screen.getByTestId("keyboard");
    userEvent.click(getByText(keyboard, "S"));
    userEvent.click(getByText(keyboard, "O"));
    userEvent.click(getByText(keyboard, "A"));
    userEvent.click(getByText(keyboard, "R"));
    userEvent.click(getByText(keyboard, "J"));
    userEvent.click(getByText(keyboard, "Backspace"));
    userEvent.click(getByText(keyboard, "E"));
    userEvent.click(getByText(keyboard, "Enter"));
    const firstRow = screen.getByTestId("wordgrid-body").firstChild as Element;
    expect(rowContent(firstRow)).toEqual(["S", "O", "A", "R", "E"]);
  });
  it("changes the state of keys on the onscreen keyboard", () => {
    render(<App />);
    const keyboard = screen.getByTestId("keyboard");
    expect(getByText(keyboard, "A").title).toEqual("unchecked");
    expect(getByText(keyboard, "B").title).toEqual("unchecked");
    expect(getByText(keyboard, "O").title).toEqual("unchecked");
    expect(getByText(keyboard, "T").title).toEqual("unchecked");
    userEvent.keyboard("ABBOT{Enter}");
    expect(getByText(keyboard, "A").title).toEqual("correct");
    expect(getByText(keyboard, "B").title).toEqual("correct");
    expect(getByText(keyboard, "O").title).toEqual("missing");
    expect(getByText(keyboard, "T").title).toEqual("missing");
  });
  it("key states only move from unchecked>missing|misplaced|correct and misplaced>correct", () => {
    render(<App />);
    const keyboard = screen.getByTestId("keyboard");
    expect(getByText(keyboard, "B").title).toEqual("unchecked");
    userEvent.keyboard("BISON{Enter}");
    expect(getByText(keyboard, "B").title).toEqual("misplaced");
    userEvent.keyboard("ABOUT{Enter}");
    expect(getByText(keyboard, "B").title).toEqual("correct");
    userEvent.keyboard("BOMBS{Enter}");
    expect(getByText(keyboard, "B").title).toEqual("correct");
  });
});
