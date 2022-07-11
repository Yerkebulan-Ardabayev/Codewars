// Create a function that takes 2 integers in form of a string as an input, and outputs the sum(also as a string):

// Example: (Input1, Input2-- > Output)

// "4", "5" -- > "9"
// "34", "5" -- > "39"
// "", "" -- > "0"
// "2", "" -- > "2"
// "-5", "3" -- > "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32 - bit integer limit(2 ^ 31 - 1)

// Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму(также в виде строки):

// Пример: (Ввод1, Ввод2-- > Вывод)

// "4", "5" -- > "9"
// "34", "5" -- > "39"
// "", "" -- > "0"
// "2", "" -- > "2"
// "-5", "3" -- > "-2"
// Заметки:

// Если какой - либо вход является пустой строкой, считайте ее нулевой.

// Входные данные и ожидаемые выходные данные никогда не превысят ограничение на 32 - разрядное целое число со знаком(2 ^ 31 - 1)

function sumStr(a, b) {
  let c = +(a) + +(b);
 
  if (a == null || b == null) {
    return 0;
  }
    return String(c);
}
console.log(sumStr("4", "5"));

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}
