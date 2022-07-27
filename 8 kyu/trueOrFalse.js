// Training JS #6: Basic data types--Boolean and conditional statements if..else

// In javascript, Boolean object only has two value, true or false.Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value.The operation between the two bool values can be used with logical operators:&&, || or some bitwise operators:&, |, !, ^

//   Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements.In other words, the Boolean value is mainly used for conditional judgment.Look this example:

//     var arr = [];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else return "arr is empty";
// You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value.it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

// These values are converted to false in the conditional statement:

// 0, -0, "", null, undefined, NaN
// Task
// Coding in function trueOrFalse, function accept 1 parameters: val, try to use the conditional statement if...else, if val value is false(val == false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// В javascript логический объект имеет только два значения true или false. Используйте ===, ==, >, <, >=, <= между двумя переменными(или константами), результатом такого выражения является логическое значение.Операцию между двумя логическими значениями можно использовать с логическими операторами: &&, || или некоторыми побитовыми операторами:&, |, !, ^

//   Многие данные могут быть неявно преобразованы в логические значения в заданном контексте, что чаще всего встречается в условных операторах.Другими словами, логическое значение в основном используется для условного суждения.Посмотрите этот пример:

// var arr = [];
// ...
// ...
// ......
// if (arr.length) return "arr has elements";
// else return "arr is empty";
// Как видите, arr определяется как массив, arr.length должно быть числовым значением, но в этом примере числовое значение должно быть преобразовано в логическое значение. это означает, что если значение arr.length равно 0, преобразовать значение в false, если значение arr.length не равно 0, преобразовать значение в true.

// Эти значения преобразуются false в условный оператор:

// 0, -0, "", null, undefined, NaN
// Задача
// Кодирование в функции trueOrFalse, функция принимает 1 параметр: val попробуйте использовать условный оператор if...else, если val значение равно false(val == false или оно может быть преобразовано в false), должно вернуть строку "false", если нет, вернуть строку "истина".

// Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.
function trueOrFalse(val) {
  return Boolean(val) ? 'true' : 'false';
}