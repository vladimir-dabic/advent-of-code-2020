const VALID_1 = "byrcidecleyrhclhgtiyrpid";
const VALID_2 = "byrecleyrhclhgtiyrpid";

const isValidObj = (obj: object) => {
  const str = Object.keys(obj).sort().join("");
  return str === VALID_1 || str === VALID_2;
};

export const findValidPassports = (batch: any[]) =>
  batch.filter(isValidObj).length;
