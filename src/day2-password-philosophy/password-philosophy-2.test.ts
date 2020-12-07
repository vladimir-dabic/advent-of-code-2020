import chalk from "chalk";
import fixture from "./fixture.json";
import { howManyPasswordsAreOK, isPasswordOK } from "./password-philosophy-2";

const ex1 = "1-3 a: abcde";
const ex2 = "1-3 b: cdefg";
const ex3 = "2-9 c: ccccccccc";

describe("day 2", () => {
  it("should test isPasswordOK function", () => {
    expect(isPasswordOK(ex1)).toBe(true);
    expect(isPasswordOK(ex2)).toBe(false);
    expect(isPasswordOK(ex3)).toBe(false);
  });
  it("should check final result", () => {
    const result = howManyPasswordsAreOK(fixture);
    console.log(result);
    expect(result).toBe(306);
    console.log(
      chalk.blue(`
        day 2 - password philosophy part 2 = ${chalk.yellow(result)}
        `)
    );
  });
});
