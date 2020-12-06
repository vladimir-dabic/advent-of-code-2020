import fixture from './fixture.json';

const expenseReport = fixture.map((item: string) => Number(item)) as number[];

expenseReport.forEach((item, index) => {
    const newArray = expenseReport.slice(index + 1, expenseReport.length - 1);
    newArray.forEach((item2) => {
        if (item + item2 === 2020) {
        }
    });
});
