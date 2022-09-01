// Given a number, write a function to output its reverse digits. (e.g.given 123 the answer is 321)

// Numbers should preserve their sign; i.e.a negative number should still be negative when reversed.

//   Examples
// 123 -> 321
//   - 456 -> -654
// 1000 -> 1

// Для заданного числа напишите функцию, которая выводит его обратные цифры. (например, учитывая 123, ответ будет 321)

// Числа должны сохранять свой знак; т.е.отрицательное число должно оставаться отрицательным при обращении.

//   Примеры
// 123 -> 321
//   - 456 -> -654
// 1000 -> 1


const reverseNumber = n => (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('')

console.log(reverseNumber(-123))