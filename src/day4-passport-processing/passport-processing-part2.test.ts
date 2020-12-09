import chalk from "chalk";
import { PassportParams } from "./types";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rowFixture = require("./fixture.json") as string[];
// eslint-disable-next-line @typescript-eslint/no-var-requires
const rowFixtureAoc = require("./fixture-aoc-example-part2.json") as string[];
import {
  findValidPassports,
  isYearValid,
  isHeightValid,
  isHexadecimalNumber,
  isEyeColorValid,
  isPassIdValid,
} from "./passport-processing-part-2";

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

describe("validation handlers", () => {
  it.each`
    str         | expected
    ${"1911"}   | ${false}
    ${"1911a"}  | ${false}
    ${"2003"}   | ${false}
    ${"2002"}   | ${true}
    ${"1920"}   | ${true}
    ${"001920"} | ${false}
  `(
    "Year validation - expect path $str to be $expected",
    ({ str, expected }) => {
      const result = isYearValid(str, 1920, 2002);
      expect(result).toBe(expected);
    }
  );
  it.each`
    height     | expected
    ${"60in"}  | ${true}
    ${"59in"}  | ${true}
    ${"76in"}  | ${true}
    ${"190cm"} | ${true}
    ${"150cm"} | ${true}
    ${"190in"} | ${false}
    ${"190"}   | ${false}
    ${"200cm"} | ${false}
  `(
    "Height validation - expect path $height to be $expected",
    ({ height, expected }) => {
      const result = isHeightValid(height);
      expect(result).toBe(expected);
    }
  );
  it.each`
    hex          | expected
    ${"#abc123"} | ${true}
    ${"#aaa"}    | ${false}
    ${"bbb"}     | ${false}
    ${"#1fdfff"} | ${true}
    ${"2000"}    | ${false}
    ${"#2000"}   | ${false}
  `(
    "Hex validation - expect path $hex to be $expected",
    ({ hex, expected }) => {
      const result = isHexadecimalNumber(hex);
      expect(result).toBe(expected);
    }
  );
  it.each`
    color    | expected
    ${"blu"} | ${true}
    ${"#sd"} | ${false}
    ${"hz9"} | ${false}
    ${"oth"} | ${true}
    ${"gry"} | ${true}
  `(
    "Height validation - expect path $color to be $expected",
    ({ color, expected }) => {
      const result = isEyeColorValid(color);
      expect(result).toBe(expected);
    }
  );
  it.each`
    id               | expected
    ${"002345674"}   | ${true}
    ${"100f0g"}      | ${false}
    ${"00001234"}    | ${false}
    ${"009887635"}   | ${true}
    ${"1234567890"}  | ${false}
    ${"1234567"}     | ${false}
    ${"12345678900"} | ${false}
  `(
    "PassId validation - expect path $id to be $expected",
    ({ id, expected }) => {
      const result = isPassIdValid(id);
      expect(result).toBe(expected);
    }
  );
});

describe("day 4 - passport processing - part 2", () => {
  it("should find two valid passports from aoc example", () => {
    const result = findValidPassports(fixtureAoc as PassportParams[]);
    expect(result).toBe(4);
  });
  it("should give me the result :)", () => {
    const result = findValidPassports(fixture as PassportParams[]);
    console.log(
      chalk.blue(`
        day 4 - passport processing - part 2 = ${chalk.yellow(result)}
        `)
    );
  });
});
