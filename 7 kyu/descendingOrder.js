// Descending Order

// Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

//   Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания.По сути, переставьте цифры, чтобы получить максимально возможное число.

//   Примеры:
// Вход: 42145 Выход: 54421

// Вход: 145263 Выход: 654321

const descendingOrder = n => {
  let a = n.toString().split('').sort((a, b) => a - b).reverse().join('');
  return +a;
}
console.log(descendingOrder(42145))