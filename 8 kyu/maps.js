// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]

// Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения.

//   Например:

// [1, 2, 3]-- > [2, 4, 6]

function maps(x) {
   const newArr = x.map((item) => {
      return  item * 2
   })
  return newArr;
}
console.log(maps([4, 1, 1, 1, 4]));