// Is the string uppercase ?
//   Task
// Create a method to see whether the string is ALL CAPS.

//   Examples(input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

// Строка в верхнем регистре ?
//   Задача
// Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.

//   Примеры(ввод -> вывод)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// В этом Ката говорится, что строка написана ВСЕ ЗАГЛАВНЫМИ буквами, если она не содержит строчных букв, поэтому любая строка, вообще не содержащая букв, тривиально считается написанной ВСЕМИ ЗАГЛАВНЫМИ буквами.


function isUpperCase(str) {
  return this.toUpperCase() === this.toString();
}
console.log(isUpperCase('ACSKLDFJSgSKLDFJSKLDFJ'));
// console.log(isUpperCase('ACSKLDFJSGSKLDFJSKLDFJ'));