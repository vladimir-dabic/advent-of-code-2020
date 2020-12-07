/* part 1 */
export const splitPassword = (pass: string) => {
  const obj = { min: null, max: null, char: "", pass: "" };
  const temp = pass.split(" ");

  obj.min = parseInt(temp[0].split("-")[0]);
  obj.max = parseInt(temp[0].split("-")[1]);
  obj.char = temp[1].replace(":", "");
  obj.pass = temp[2];
  return obj;
};

export const isPasswordOK = (passWithAssets: string): boolean => {
  const { max, min, pass, char } = splitPassword(passWithAssets);
  const temp = pass
    .split("")
    .filter(c => c === char)
    .join("");

  return temp.length >= min && temp.length <= max;
};

export const howManyPasswordsAreOK = (passwords: string[]) =>
  passwords.filter(isPasswordOK).length;
