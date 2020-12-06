/* part one */
export const findTwoReportstoSum2020 = (expenseReport: number[]): number[] => {
  let final;
  expenseReport.forEach((item, index) => {
    const newArray = expenseReport.slice(index + 1, expenseReport.length - 1);
    newArray.forEach((item2) => {
      if (item + item2 === 2020) {
        final = [item, item2];
      }
    });
  });
  return final;
};

/* part two */
export const findThreeReportstoSum2020 = (expenseReport: number[]): number[] => {
  let final;
  expenseReport.forEach((item, index) => {
    const newArray = expenseReport.slice(index + 1, expenseReport.length - 1);
    newArray.forEach((item2) => {
      const thirdArray = newArray.slice(index + 1, expenseReport.length - 1);
      thirdArray.forEach((item3) => {
        if (item + item2 + item3 === 2020) {
          final = [item, item2, item3];
        }
      });
    });
  });
  return final;
};
