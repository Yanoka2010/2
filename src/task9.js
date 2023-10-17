const summ1 = 200000;
const percent = 10;
const term = 2;
const summ2 = summ1 * Math.pow(((percent/ 100)+1), term);
const overpay = summ2 - summ1;
console.log(summ2, "-Общая выплата,", overpay, '-Переплата');