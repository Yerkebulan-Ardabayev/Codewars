// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar.Always return a positive decimal part.

//   Examples
// getDecimal(2.4) === 0.4
// getDecimal(-0.2) === 0.2

// Напишите функцию, которая возвращает только десятичную часть заданного числа.

// Вам нужно обрабатывать только действительные числа, а не Infinity, NaN или подобные.Всегда возвращайте положительную десятичную часть.

//   Примеры
// getDecimal(2.4) === 0.4
// getDecimal(-0.2) === 0.2


function getDecimal(n) {
  if (Number.isInteger(n) || n === Infinity || n === NaN) {
    return 0;
  }
  const decimalStr = (n.toString().split('.')[1]) % 0.9;
  return decimalStr.toFixed(1);
}



function getDecimal(n) {
  if (Number.isInteger(n) || n === Infinity || n === NaN) {
    return 0;
  }
  const m = n % 1;
  if (m < 0) {
    return m * -1;
  }
  return Number(m.toFixed(1));
}

function getDecimal(n) {
  return Math.abs(n % 1);
}

function getDecimal(n) {
  return n > 0 ? n - parseInt(n) : parseInt(n) - n;
}

console.log(getDecimal(-4.5));