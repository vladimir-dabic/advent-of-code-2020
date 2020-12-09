import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json") as string[];
import { sumCollectedAnswers, countAnswersForGroup } from "./custom-customs";

const exampleFixture = [
  ["abc"],
  ["a", "b", "c"],
  ["ab", "ac"],
  ["a", "a", "a", "a"],
  ["b"],
];

describe("day 6 - custom customs", () => {
  it.each`
    group                   | expected
    ${["abc"]}              | ${3}
    ${["a", "b", "c"]}      | ${3}
    ${["ab", "ac"]}         | ${3}
    ${["a", "a", "a", "a"]} | ${1}
    ${["b"]}                | ${1}
  `("group $group should count $expected", ({ group, expected }) => {
    const result = countAnswersForGroup(group);
    expect(result).toBe(expected);
  });
  it.only("should work for example fixture", () => {
    const result = sumCollectedAnswers(exampleFixture);
    console.log({ result });
    expect(result).toBe(11);
  });
  it.only("should give me the result", () => {
    const result = sumCollectedAnswers(fixture);
    expect(result).toBe(6686);
    console.log(
      chalk.blue(`
        day 6 - custom customs = ${chalk.yellow(result)}
        `)
    );
  });
});
