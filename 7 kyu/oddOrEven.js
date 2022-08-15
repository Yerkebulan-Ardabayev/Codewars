// Odd or Even ?
//   Task :
//   Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0](array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


// Задача:
// Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

// Дайте ответ в виде сопоставления строк "odd"или "even".

// Если входной массив пуст, рассматривайте его как: [0](массив с нулем).

//   Примеры:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

const oddOrEven = array => {
  let newArr = array.reduce((e, i) => e + i, 0); 
  return newArr % 2 == 0 || newArr == [] ? 'even' : 'odd';
}
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
console.log(oddOrEven([1023, 1, 2]));