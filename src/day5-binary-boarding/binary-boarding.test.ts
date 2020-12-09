import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json") as string[];
import {
  getHighestSeat,
  getIdFromPattern,
  getValidRowOrColumn,
  getEmptySeat,
} from "./binary-boarding";

describe("day 5 - binary boarding - part 1", () => {
  it("should test valid row", () => {
    const result = getValidRowOrColumn("FBFBBFF", "row");
    expect(result).toBe(44);
  });
  it("should test valid column", () => {
    const result = getValidRowOrColumn("RLR", "column");
    expect(result).toBe(5);
  });
  it.each`
    pattern         | expected
    ${"FBFBBFFRLR"} | ${357}
    ${"BFFFBBFRRR"} | ${567}
    ${"FFFBBBFRRR"} | ${119}
    ${"BBFFBBFRLL"} | ${820}
  `(
    "expect pattern $pattern to have id = $expected",
    ({ pattern, expected }) => {
      const result = getIdFromPattern(pattern);
      expect(result).toBe(expected);
    }
  );
  it("should give me the result :)", () => {
    const result = getHighestSeat(fixture);
    expect(result).toBe(980);
    console.log(
      chalk.blue(`
        day 5 - binary boarding - part 1 = ${chalk.yellow(result)}
        `)
    );
  });
  it("should give me the result for pat two :)", () => {
    const result = getEmptySeat(fixture);
    expect(result).toBe(607);
    console.log(
      chalk.blue(`
        day 5 - binary boarding - part 2 = ${chalk.yellow(result)}
        `)
    );
  });
});
