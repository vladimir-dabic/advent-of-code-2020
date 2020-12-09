import { PassportParams } from "./types";

const VALID_1 = "byrcidecleyrhclhgtiyrpid";
const VALID_2 = "byrecleyrhclhgtiyrpid";

export const isYearValid = (year: string, min: number, max: number) => {
  const numYear = Number(year);
  if (numYear && year.length === 4) {
    return numYear >= min && numYear <= max;
  }
  return false;
};

export const isHeightValid = (height: string) => {
  if (height.endsWith("cm") && height.length === 5) {
    const numHeight = Number(height.replace("cm", ""));

    return numHeight >= 150 && numHeight <= 193;
  }
  if (height.endsWith("in") && height.length === 4) {
    const numHeight = Number(height.replace("in", ""));

    return numHeight >= 59 && numHeight <= 76;
  }
  return false;
};

export const isHexadecimalNumber = (hex: string) =>
  /^#([0-9a-f]{6})$/i.test(hex);

export const isEyeColorValid = (color: string) =>
  ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(color);

export const isPassIdValid = (id: string) => /^[0-9]{9}$/i.test(id);

// eslint-disable-next-line @typescript-eslint/ban-types
const isValidObj = (obj: PassportParams) => {
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = obj;
  const keysStr = Object.keys(obj).sort().join("");
  return (
    (keysStr === VALID_1 || keysStr === VALID_2) &&
    isYearValid(byr, 1920, 2002) &&
    isYearValid(iyr, 2010, 2020) &&
    isYearValid(eyr, 2020, 2030) &&
    isHeightValid(hgt) &&
    isHexadecimalNumber(hcl) &&
    isEyeColorValid(ecl) &&
    isPassIdValid(pid)
  );
};

export const findValidPassports = (batch: PassportParams[]) =>
  batch.filter(isValidObj).length;
