import chalk from "chalk";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fixture = require("./fixture.json");
import { findTheThrees, isClearPath } from "./toboggan-trajectory";

describe("day 3 - toboggan trajectory - part 1", () => {
  it.each`
    row                                  | index | maxLength | expected
    ${"....#...............#.#..###.##"} | ${1}  | ${30}     | ${true}
    ${"....###......#....#.#...#.##..#"} | ${5}  | ${30}     | ${false}
    ${"##......#.....#......#.....##.."} | ${8}  | ${30}     | ${false}
    ${"....#...............#......#.#."} | ${10} | ${30}     | ${true}
    ${"#...#"}                           | ${6}  | ${5}      | ${true}
    ${"#..."}                            | ${9}  | ${4}      | ${true}
  `(
    "expect $expected to be on index $index in $row",
    ({ row, index, maxLength, expected }) => {
      const result = isClearPath(row, index, maxLength);
      expect(result).toBe(expected);
    }
  );
  it("should give me the result :)", () => {
    const result = findTheThrees(fixture);
    expect(result).toBe(211);
    console.log(
      chalk.blue(`
        day 3 - toboggan trajectory part 1 = ${chalk.yellow(result)}
        `)
    );
  });
});
