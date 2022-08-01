// Возведение каждой цифры в квадрат

// Добро пожаловать.В этой ката вас просят возвести в квадрат каждую цифру числа и соединить их.

//   Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1.

// Примечание.Функция принимает целое число и возвращает целое число.

// Square Every Digit
// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = num => parseInt(num.toString().split("").map(num => parseInt(num)).map(num => num * num).join(""))

function squareDigits(num) {
  return +num.toString().split('').map(i => i * i).join('');
}
console.log(squareDigits(2112));