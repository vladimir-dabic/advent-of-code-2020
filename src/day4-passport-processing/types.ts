export enum FIELD {
  BIRTH_YEAR = "byr",
  ISSUE_YEAR = "iyr",
  EXP_YEAR = "eyr",
  HEIGHT = "hgt",
  HAIR_COLOR = "hcl",
  EYE_COLOR = "ecl",
  PASS_ID = "pid",
  COUNTRY_ID = "cid",
}

export type PassportParams = {
  [FIELD.BIRTH_YEAR]: string;
  [FIELD.ISSUE_YEAR]: string;
  [FIELD.EXP_YEAR]: string;
  [FIELD.HEIGHT]: string;
  [FIELD.HAIR_COLOR]: string;
  [FIELD.EYE_COLOR]: string;
  [FIELD.PASS_ID]: string;
  [FIELD.COUNTRY_ID]: string;
};
