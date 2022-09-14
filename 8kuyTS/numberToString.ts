// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
//   - 100 -- > "-100"

//   Нам нужна функция, которая может преобразовать число (целое число) в строку.

// Какие способы достижения этого вы знаете?

// Примеры (ввод --> вывод):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

export const numberToString = (num: number): string => num.toString();