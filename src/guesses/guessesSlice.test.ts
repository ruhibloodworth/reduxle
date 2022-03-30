import { scoreGuess } from "./guessesSlice";

describe("scoreGuess", () => {
  it("marks correct guesses", () => {
    expect(scoreGuess("ABOUT", "ABOUT")[0]).toBeTruthy();
  });
  it("marks incorrect guesses", () => {
    expect(scoreGuess("HOUND", "ABOUT")[0]).toBeFalsy();
  });
  it("marks letters in the correct place", () => {
    expect(scoreGuess("BOUND", "BOUND")[1]).toEqual([
      "correct",
      "correct",
      "correct",
      "correct",
      "correct",
    ]);
  });
  it("marks letters that are not in the answer as missing", () => {
    expect(scoreGuess("IRATE", "HOUND")[1]).toEqual([
      "missing",
      "missing",
      "missing",
      "missing",
      "missing",
    ]);
  });
  it("marks letters that are in a different place in the answer as misplaced", () => {
    expect(scoreGuess("PORES", "SPORE")[1]).toEqual([
      "misplaced",
      "misplaced",
      "misplaced",
      "misplaced",
      "misplaced",
    ]);
  });
  it("handles repeated letters that are both correct and missing", () => {
    expect(scoreGuess("FLUFF", "FAKES")[1]).toEqual([
      "correct",
      "missing",
      "missing",
      "missing",
      "missing",
    ]);
  });
  it("handles repeated letters that are misplaced", () => {
    expect(scoreGuess("FLUFF", "AFFIX")[1]).toEqual([
      "misplaced",
      "missing",
      "missing",
      "misplaced",
      "missing",
    ]);
  });
});
