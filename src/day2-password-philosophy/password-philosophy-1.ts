/* part 1 */
export const splitPassword = (pass: string) => {
  const temp = pass.split(" ");
  return {
    min: parseInt(temp[0].split("-")[0]),
    max: parseInt(temp[0].split("-")[1]),
    char: temp[1].replace(":", ""),
    pass: temp[2],
  };
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
