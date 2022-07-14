// Exclusive "or"(xor) Logical Operator

// Exclusive "or"(xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator(e.g. &&, ||, and, or, etc.) called the "Exclusive Or"(hence the name of this Kata).The exclusive or evaluates two booleans.It then returns true if exactly one of the two expressions are true, false otherwise.For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript(well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// Эксклюзивное «или»(xor) Логический оператор
// Обзор
// В некоторых языках сценариев, таких как PHP, существует логический оператор(например &&, ||, and, or, и т.д.), называемый «Исключающее ИЛИ»(отсюда и название этого Ката).Исключающее или оценивает два логических значения.Затем он возвращает true, если ровно одно из двух выражений истинно, и false в противном случае.Например:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Задача
// Поскольку мы не можем определить ключевые слова в Javascript(ну, по крайней мере, я не знаю, как это сделать), ваша задача — определить функцию, в xor(a, b)которой a и b — два выражения, которые нужно вычислить.Ваша xor функция должна иметь поведение, описанное выше, возвращая true, если только одно из двух выражений оценивается как true, и false в противном случае.

function xor(a, b) {
  return a !== b
}
console.log(xor(true, true));