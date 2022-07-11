// What is between ?

// Complete the function that takes two integers(a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Завершите функцию, которая принимает два целых числа(a, b, где a < b) и верните массив всех целых чисел между входными параметрами, включая их.

//   Например:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}