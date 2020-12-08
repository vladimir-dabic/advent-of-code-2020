const THREE = "#";
const MAX_LENGTH = 31;

export const isClearPath = (
  row: string,
  pathIndex: number,
  maxLength: number
) => (row.charAt(pathIndex % maxLength) !== THREE ? true : false);

export const findTheThrees = (
  toboggan: string[],
  pathRight = 1,
  maxLength = MAX_LENGTH,
  pathDown?: number
) => {
  let final = 0;
  let path = 0;

  toboggan.forEach((row, index) => {
    if (pathDown > 1) {
      if (index % 2 === 0) {
        if (!isClearPath(row, path, maxLength)) {
          final += 1;
        }
        path += pathRight;
      }
    } else {
      if (!isClearPath(row, path, maxLength)) {
        final += 1;
      }
      path += pathRight;
    }
  });
  return final;
};

export const findTheThreesForAllPaths = (
  toboggan: string[],
  paths: { right: number; down: number }[],
  maxLength: number
) =>
  paths.reduce((acc, curr) => {
    const { right, down } = curr;
    const temp = findTheThrees(toboggan, right, maxLength, down);
    return acc * temp;
  }, 1);
