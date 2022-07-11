// Expressions Matter

// Task
// Given three integers a, b, c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words, try every combination of a, b, c with [* +()], and return the Maximum Obtained
// Example
// With the numbers are 1, 2 and 3, here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range(1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
//   It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur.
// You cannot swap the operands.For instance, in the given example you cannot get expression(1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1, 2, 3) ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression(1 + 2) * 3 = 9.

// expressionsMatter(1, 1, 1) ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9, 1, 1) ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1 + 1) = 18. ___# Task

// Given three integers a, b, c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words, try every combination of a, b, c with [* +()], and return the Maximum Obtained
// Example
// With the numbers are 1, 2 and 3, here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range(1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
//   It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur.
// You cannot swap the operands.For instance, in the given example you cannot get expression(1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1, 2, 3) ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression(1 + 2) * 3 = 9.

// expressionsMatter(1, 1, 1) ==>  return 3

// Задача
// Даны три целых числа a, b, c, вернуть наибольшее число, полученное после вставки следующих операторов и скобок: +,*, ()
// Другими словами, попробуйте каждую комбинацию a, b, c с[* +()] и верните максимальное полученное значение.
//   Пример
// С числами 1, 2 и 3 вот несколько способов размещения знаков и скобок:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
// Таким образом, максимальное значение, которое вы можете получить, равно 9.

//   Заметки
// Цифры всегда положительные.
// Числа находятся в диапазоне(1 ≤ a, b, c ≤ 10).
// Вы можете использовать одну и ту же операцию более одного раза.
// Необязательно расставлять все знаки и скобки.
// Возможно повторение цифр.
// Вы не можете поменять местами операнды.Например, в данном примере вы не можете получить выражение(1 + 3) * 2 = 8.
//   Ввод >> Примеры вывода:
// expressionsMatter(1, 2, 3) ==>  return 9
// Объяснение:
// После расстановки знаков и скобок Максимальное значение, полученное из выражения(1 + 2) * 3 = 9.

//   expressionsMatter(1, 1, 1) ==>  return 3
// Объяснение:
// После расстановки знаков Максимальное значение, полученное из выражения, равно 1 + 1 + 1 = 3.

//   expressionsMatter(9, 1, 1) ==>  return 18
// Объяснение:
// После расстановки знаков и скобок Максимальное значение, полученное из выражения, равно 9 * (1 + 1) = 18.___# Задача

// Даны три целых числа a, b, c, вернуть наибольшее число, полученное после вставки следующих операторов и скобок: +,*, ()
// Другими словами, попробуйте каждую комбинацию a, b, c с[* +()] и верните максимальное полученное значение.
//   Пример
// С числами 1, 2 и 3 вот несколько способов размещения знаков и скобок:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
//   (1 + 2) * 3 = 9
// Таким образом, максимальное значение, которое вы можете получить, равно 9.

//   Заметки
// Цифры всегда положительные.
// Числа находятся в диапазоне(1 ≤ a, b, c ≤ 10).
// Вы можете использовать одну и ту же операцию более одного раза.
// Необязательно расставлять все знаки и скобки.
// Возможно повторение цифр.
// Вы не можете поменять местами операнды.Например, в данном примере вы не можете получить выражение(1 + 3) * 2 = 8.
//   Ввод >> Примеры вывода:
// expressionsMatter(1, 2, 3) ==>  return 9
// Объяснение:
// После расстановки знаков и скобок Максимальное значение, полученное из выражения(1 + 2) * 3 = 9.

//   expressionsMatter(1, 1, 1) ==>  return 3

function expressionMatter(a, b, c) {
  let d = a + b + c;
  let dd = a * (b + c);
  let ddd = a * b * c;
  let f = a + b * c
  let ff = (a + b) * c;
  return Math.max(d,dd,ddd,f,ff);
}
console.log(expressionMatter(2, 10, 3));