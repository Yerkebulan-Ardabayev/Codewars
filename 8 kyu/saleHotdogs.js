// Training JS #7: if..else and ternary operator

// In JavaScript, if..else is the most basic condition statement, it consists of three parts: condition, statement1, statement2, like this:

// if (condition) statementa
// else statementb
// It means that if the condition is true, then execute the statementa, otherwise execute the statementb.If the statementa or statementb more than one line, you need to add { and } at the head and tail of statement in JS, to keep the same indentation on Python and to put a end in Ruby where it indeed ends.

// An example, if we want to judge whether a number is odd or even, we can write code like this:

// function oddEven(n) {
//   if (n % 2 == 1) return "odd number";
//   else return "even number";
// }
// If there is more than one condition to judge, we can use the compound if...else statement.an example:

// function oldYoung(age) {
//   if (age < 16) return "children"
//   else if (age < 50) return "young man"   //use "else if" if needed
//   else return "old man"
// }
// This function returns a different value depending on the parameter age.

// Looks very complicated ? Well, JS and Ruby also support the ternary operator and Python has something similar too:

// condition ? statementa : statementb
// Condition and statement separated by "?", different statement separated by ":" in both Ruby and JS; in Python you put the condition in the middle of two alternatives.The two examples above can be simplified with ternary operator:

// function oddEven(n) {
//   return n % 2 == 1 ? "odd number" : "even number";
// }
// function oldYoung(age) {
//   return age < 16 ? "children" : age < 50 ? "young man" : "old man";
// }
// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters: n, n is the number of customers to buy hotdogs, different numbers have different prices(refer to the following table), return a number that the customer need to pay how much money.

// number	price(cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// // In the end, click "Submit" to submit your code pass this kata.

// В JavaScript if..else это самый простой оператор условия, он состоит из трех частей: condition, statement1, statement2, например:

// if (condition) statementa
// else statementb
// Это означает, что если условие истинно, то выполните оператор a, в противном случае выполните оператор b.Если оператор a или оператор b более одной строки, вам нужно добавить { и }в начале и в конце оператора в JS, чтобы сохранить один и тот же отступ на Python и поместить endв Ruby там, где он действительно заканчивается.

//   Например, если мы хотим определить, является ли число нечетным или четным, мы можем написать такой код:

// function oddEven(n) {
//   if (n % 2 == 1) return "odd number";
//   else return "even number";
// }
// Если есть более одного условия для оценки, мы можем использовать составной оператор if...else.пример:

// function oldYoung(age) {
//   if (age < 16) return "children"
//   else if (age < 50) return "young man"   //use "else if" if needed
//   else return "old man"
// }
// Эта функция возвращает другое значение в зависимости от возраста параметра.

// Выглядит очень сложно ? Ну, JS и Ruby также поддерживают, ternary operatorи у Python тоже есть что - то подобное:

// condition ? statementa : statementb
// Условие и оператор разделены знаком «?», другой оператор разделен знаком «:» как в Ruby, так и в JS; в Python вы помещаете условие посередине двух альтернатив.Два приведенных выше примера можно упростить с помощью тернарного оператора:

// function oddEven(n) {
//   return n % 2 == 1 ? "odd number" : "even number";
// }
// function oldYoung(age) {
//   return age < 16 ? "children" : age < 50 ? "young man" : "old man";
// }
// Задача:
// Полная функция saleHotdogs / SaleHotDogs / sale_hotdogs, функция принимает 1 параметры: n, n - количество клиентов, покупающих хот - доги, разные числа имеют разные цены(см.следующую таблицу), возвращает число, которое клиент должен заплатить, сколько денег.

// количество	цена(центы)
// п < 5	100
// n >= 5 и n < 10	95
// п >= 10	90
// Вы можете использовать if..else или тернарный оператор для его завершения.

// When you have finished the work, click "Run Tes

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
console.log(saleHotdogs(100));