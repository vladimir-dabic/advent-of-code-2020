import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json");
import {
  findTwoReportstoSum2020,
  findThreeReportstoSum2020,
} from "./report-repair";

describe("day 1 - report repair - part 1", () => {
  it("should find two numbers in the array which sum is 2020", () => {
    const final = findTwoReportstoSum2020(fixture);

    final.forEach(item => {
      expect(fixture.includes(item)).toBeTruthy();
    });
    expect(final[0] + final[1]).toBe(2020);
    console.log(
      chalk.blue(`
        day 1 - report repair part 1 = ${chalk.yellow(final[0] * final[1])}
        `)
    );
  });
});

describe("day 1 - report repair - part 2", () => {
  it("should find three numbers in the array which sum is 2020", () => {
    const final = findThreeReportstoSum2020(fixture);

    final.forEach(item => {
      expect(fixture.includes(item)).toBeTruthy();
    });
    expect(final[0] + final[1] + final[2]).toBe(2020);
    console.log(
      chalk.blue(`
        day 1 - report repair part 2 = ${chalk.yellow(
          final[0] * final[1] * final[2]
        )}
        `)
    );
  });
});
