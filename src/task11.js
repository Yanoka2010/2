const second = 3665;
const h = second / 3600;
const m = second / 3600 % 60;
const second2 = second / 1 % 60;
console.log(h, 'ч', m, 'мин', second2, 'сек');