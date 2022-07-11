// Beginner - Reduce but Grow

// Given a non - empty array of integers, return the result of multiplying the values together in order.Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку.
//   Пример:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((n, r) => {return n * r}, 1)
}
console.log(grow([4, 1, 1, 1, 4]))