export const countAnswersForGroup = (group: string[]) =>
  [...new Set(group.join("").split(""))].length;

export const sumCollectedAnswers = (answers: any[]) =>
  answers.reduce((acc, curr) => {
    return acc + countAnswersForGroup(curr);
  }, 0);
