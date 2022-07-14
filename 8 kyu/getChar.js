// get character from ASCII Value

// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// Example:

// get_char(65)
// should return:

// 'A'
// Напишите функцию get_char() / getChar(), которая принимает число и возвращает соответствующий символ ASCII для этого значения.

//   Пример:

// get_char(65)
// должен вернуться:

// 'A'

function getChar(c) {
  return String.fromCharCode(c);
}