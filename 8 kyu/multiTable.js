// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table(string) for number == 5 looks like below:

//   1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P.S.You can use \n in string to jump to the next line.

//   Note: newlines should be added between rows, but there should be no trailing newline at the end.If you're unsure about the format, look at the sample tests.

//   Ваша цель — вернуть таблицу умножения, поскольку number она всегда является целым числом от 1 до 10.

// Например, таблица умножения(строка) для number == 5 выглядит следующим образом:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// PS Вы можете использовать \n in string для перехода на следующую строку.

//   Примечание: символы новой строки должны быть добавлены между строками, но в конце не должно быть завершающей новой строки.Если вы не уверены в формате, посмотрите примеры тестов.

const multiTable = number => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => `${item} * ${number} = ${item * number}`).join('\n');
  

console.log(multiTable(5));