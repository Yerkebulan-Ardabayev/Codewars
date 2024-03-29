// Sum of numbers from 0 to N

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

//   Example:
// Input:

// > 6
// Output:

// 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

// Input:

// > -15
// Output:

// -15 < 0

// Input:

// > 0
// Output:

// 0 = 0

// Описание:

// Мы хотим сгенерировать функцию, которая вычисляет ряд, начиная с 0 и заканчивая заданным числом.

//   Пример:
// Вход:

// > 6
// Выход:

// 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

// Вход:

// > -15
// Выход:

// -15 < 0

// Вход:

// > 0
// Выход:

// 0 = 0

const SequenceSum = (function () {
  function SequenceSum() { }

  SequenceSum.showSequence = function (count) {
    let arr = [];
    for (let i = 0; i <= count; i++) { arr.push(i) };
    let b = arr.reduce((total, next) => total + next, 0)
    let a = arr.join('+');
    if (count < 0) return `${count}<0`;
    if (count == 0) return `${count}=0`;
    return `${a} = ${b}`
  };

  return SequenceSum;

})();