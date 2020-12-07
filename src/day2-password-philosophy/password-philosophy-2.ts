/* part 1 */
export const splitPassword = (pass: string) => {
  const temp = pass.split(" ");
  return {
    firstPosition: parseInt(temp[0].split("-")[0]),
    secondPosition: parseInt(temp[0].split("-")[1]),
    char: temp[1].replace(":", ""),
    pass: temp[2],
  };
};

export const isPasswordOK = (passWithAssets: string) => {
  const { firstPosition, secondPosition, pass, char } = splitPassword(
    passWithAssets
  );
  const isFirstPositionOK = pass.charAt(firstPosition - 1) === char;
  const isSecondPositionOk = pass.charAt(secondPosition - 1) === char;

  return (
    (isFirstPositionOK && !isSecondPositionOk) ||
    (!isFirstPositionOK && isSecondPositionOk)
  );
};

export const howManyPasswordsAreOK = (passwords: string[]) =>
  passwords.filter(isPasswordOK).length;
