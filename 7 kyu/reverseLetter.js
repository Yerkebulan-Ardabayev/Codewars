// Task
// Given a string str, reverse it and omit all non - alphabetic characters.

//   Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

//   Input / Output
//   [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// Задача
// Получив строку str, переверните ее и опустите все неалфавитные символы.

//   Пример
// Для str = "krishan", вывод должен быть "nahsirk".

// Для str = "ultr53o?n", вывод должен быть "nortlu".

//   Ввод, вывод
//   [input]нитьstr
// Строка состоит из строчных латинских букв, цифр и символов.

// [output]строка

const reverseLetter = str => str.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
console.log(reverseLetter("ultr53o?n")); 