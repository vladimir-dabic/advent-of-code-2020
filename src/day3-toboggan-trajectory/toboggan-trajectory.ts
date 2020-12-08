const THREE = "#";
const MAX_LENGTH = 31;

export const isClearPath = (
  row: string,
  pathIndex: number,
  maxLength: number
) => (row.charAt(pathIndex % maxLength) !== THREE ? true : false);

export const findTheThrees = (toboggan: string[], pathNum = 3) => {
  let final = 0;
  let path = 0;

  toboggan.forEach(row => {
    if (!isClearPath(row, path, MAX_LENGTH)) {
      final += 1;
    }
    path += pathNum;
  });
  return final;
};
