import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json") as string[];
import {
  sumCollectedAnswers,
  sumCollectedAnswersV2,
  countAnswersForGroup,
  countAnswersForGroupV2,
} from "./custom-customs";

const exampleFixture = [
  ["abc"],
  ["a", "b", "c"],
  ["ab", "ac"],
  ["a", "a", "a", "a"],
  ["b"],
];

describe("day 6 - custom customs - part 1", () => {
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
  it("should work for example fixture", () => {
    const result = sumCollectedAnswers(exampleFixture);
    console.log({ result });
    expect(result).toBe(11);
  });
  it("should give me the result", () => {
    const result = sumCollectedAnswers(fixture);
    expect(result).toBe(6686);
    console.log(
      chalk.blue(`
        day 6 - custom customs = ${chalk.yellow(result)}
        `)
    );
  });
});
describe("day 6 - custom customs - part 2", () => {
  it.each`
    group                   | expected
    ${["abc"]}              | ${3}
    ${["a", "b", "c"]}      | ${0}
    ${["ab", "ac"]}         | ${1}
    ${["a", "a", "a", "a"]} | ${1}
    ${["b"]}                | ${1}
  `("group $group should count $expected", ({ group, expected }) => {
    const result = countAnswersForGroupV2(group);
    expect(result).toBe(expected);
  });
  it("should work for example fixture", () => {
    const result = sumCollectedAnswersV2(exampleFixture);
    console.log({ result });
    expect(result).toBe(6);
  });
  it("should give me the result", () => {
    const result = sumCollectedAnswersV2(fixture);
    expect(result).toBe(3476);
    console.log(
      chalk.blue(`
        day 6 - custom customs = ${chalk.yellow(result)}
        `)
    );
  });
});
