const templateRows = Array.from({ length: 128 }, (_, idx) => idx);
const templateColumns = Array.from({ length: 8 }, (_, idx) => idx);

const sliceFront = (arr: number[]) => arr.slice(0, arr.length / 2);
const sliceBack = (arr: number[]) => arr.slice(arr.length / 2);

const lookupSlice = {
  F: sliceFront,
  B: sliceBack,
  R: sliceBack,
  L: sliceFront,
};

export const getValidRowOrColumn = (rowOrColumn: string, identifier: string) =>
  rowOrColumn
    .split("")
    .reduce(
      (acc, curr) => (acc = lookupSlice[curr](acc)),
      identifier === "row" ? templateRows : templateColumns
    )[0];

export const getIdFromPattern = (pattern: string) =>
  getValidRowOrColumn(pattern.slice(0, 7), "row") * 8 +
  getValidRowOrColumn(pattern.slice(7), "column");

export const getHighestSeat = (patterns: string[]) => {
  const allIds = patterns.map(pattern => getIdFromPattern(pattern));
  return Math.max(...allIds);
};
