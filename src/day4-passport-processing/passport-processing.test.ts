import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rowFixture = require("./fixture.json") as string[];
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rowFixtureAoc = require("./fixture-aoc-example.json") as string[];
import { findValidPassports } from "./passport-processing";

const convertFixture = (fix: string[]) =>
  fix.map(item => {
    const split1 = item.split(" ");
    return split1.reduce((acc, curr) => {
      const split2 = curr.split(":");
      acc[split2[0]] = split2[1];
      return acc;
    }, {});
  });

const fixture = convertFixture(rowFixture);
const fixtureAoc = convertFixture(rowFixtureAoc);

describe("day 4 - passport processing - part 1", () => {
  it("should find two valid passports from aoc example", () => {
    const result = findValidPassports(fixtureAoc);
    expect(result).toBe(2);
  });
  it("should give me the result :)", () => {
    const result = findValidPassports(fixture);
    expect(result).toBe(213);
    console.log(
      chalk.blue(`
        day 4 - passport processing - part 1 = ${chalk.yellow(result)}
        `)
    );
  });
});
