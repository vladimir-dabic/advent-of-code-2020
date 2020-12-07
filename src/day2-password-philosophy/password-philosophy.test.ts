import chalk from "chalk";
import fixture from "./fixture.json";
import {
  howManyPasswordsAreOK,
  isPasswordOK,
  splitPassword,
} from "./password-philosophy";

const ex1 = "1-3 a: abcde";
const ex2 = "1-3 b: cdefg";
const ex3 = "2-9 c: ccccccccc";

describe.only("day 2", () => {
  it("should test splitPassword function", () => {
    expect(splitPassword(ex1)).toStrictEqual({
      min: 1,
      max: 3,
      char: "a",
      pass: "abcde",
    });
    expect(splitPassword(ex2)).toStrictEqual({
      min: 1,
      max: 3,
      char: "b",
      pass: "cdefg",
    });
    expect(splitPassword(ex3)).toStrictEqual({
      min: 2,
      max: 9,
      char: "c",
      pass: "ccccccccc",
    });
  });
  it("should test isPasswordOK function", () => {
    expect(isPasswordOK(ex1)).toBe(true);
    expect(isPasswordOK(ex2)).toBe(false);
    expect(isPasswordOK(ex3)).toBe(true);
  });
  it("should check final result", () => {
    const result = howManyPasswordsAreOK(fixture);
    expect(result).toBe(572);
    console.log(
      chalk.blue(`
        day 2 - password philosophy part 1 = ${chalk.yellow(result)}
        `)
    );
  });
});

describe.only("day 2 - part 2", () => {
  it("should work", () => {});
});
