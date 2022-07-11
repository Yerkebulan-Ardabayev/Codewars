// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

//   find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// The first array will always have at least one element.


// Даны два целочисленных массива, где второй массив представляет собой перетасованный дубликат первого массива с отсутствующим одним элементом, найдите отсутствующий элемент.

// Обратите внимание, что в массивах могут быть дубликаты, поэтому проверка наличия числового значения в одном, а не в другом, не является допустимым решением.

//   find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
// find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
// Первый массив всегда будет иметь хотя бы один элемент.


function findMissing(arr1, arr2) {
  let arr1_sorted = arr1.sort((a, b) => a - b);
  let arr2_sorted = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr1_sorted.length; i++) {
    if (arr1_sorted[i] !== arr2_sorted[i]) {
      return arr1_sorted[i];
    }
  }
}

function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}