// If you can't sleep, just count sheep!!

// Task:
// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative integers.

// Если не можешь уснуть, считай овец!!

// Задача:
// Например, если задано неотрицательное целое число, 3 верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...".Ввод всегда будет действительным, т.е.отрицательных целых чисел не будет.

const countSheep = function (num) {
  return [...Array(num).keys()].reduce((res, i) => res + (i + 1) + ' sheep...', '');
}
var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) { str += `${i} sheep...`; }
  return str;
}