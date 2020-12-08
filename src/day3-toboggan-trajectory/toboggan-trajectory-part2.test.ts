import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture2 = require("./fixture-aoc-example.json");
import {
  findTheThrees,
  findTheThreesForAllPaths,
} from "./toboggan-trajectory-part2";

describe.only("day 3 - toboggan trajetory - part 2", () => {
  it.only.each`
    pathRight | pathDown | expected
    ${1}      | ${1}     | ${2}
    ${3}      | ${1}     | ${7}
    ${5}      | ${1}     | ${3}
    ${7}      | ${1}     | ${4}
    ${1}      | ${2}     | ${2}
  `(
    "expect path $path to have $expected threes",
    ({ pathRight, pathDown, expected }) => {
      const result = findTheThrees(fixture2, pathRight, 66, pathDown);
      expect(result).toBe(expected);
    }
  );
  it("should work for down", () => {
    const result = findTheThrees(fixture2);
    expect(result).toBe(4);
  });
  it("should match results with the example", () => {
    const result = findTheThreesForAllPaths(
      fixture2,
      [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 },
      ],
      66
    );
    expect(result).toBe(336);
  });
  it.only("should find results ", () => {
    const result = findTheThreesForAllPaths(
      fixture,
      [
        { right: 1, down: 1 },
        { right: 3, down: 1 },
        { right: 5, down: 1 },
        { right: 7, down: 1 },
        { right: 1, down: 2 },
      ],
      31
    );
    expect(result).toBe(3584591857);
    console.log(
      chalk.blue(`
        day 3 - tobogan trajectory part 2 = ${chalk.yellow(3584591857)}
        `)
    );
  });
});
