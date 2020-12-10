import _ from "lodash";

export const countAnswersForGroup = (group: string[]) =>
  [...new Set(group.join("").split(""))].length;

export const sumCollectedAnswers = (answers: any[]) =>
  answers.reduce((acc, curr) => {
    return acc + countAnswersForGroup(curr);
  }, 0);

/* part 2 */

export const countAnswersForGroupV2 = (group: string[]) =>
  _.intersection(...group.map(i => i.split(""))).length;

export const sumCollectedAnswersV2 = (answers: any[]) =>
  answers.reduce((acc, curr) => {
    return acc + countAnswersForGroupV2(curr);
  }, 0);
