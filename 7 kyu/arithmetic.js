// Given two numbers and an arithmetic operator(the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples: (Input1, Input2, Input3-- > Output)

// 5, 2, "add"      -- > 7
// 5, 2, "subtract" -- > 3
// 5, 2, "multiply" -- > 10
// 5, 2, "divide"   -- > 2.5

// Имея два числа и арифметический оператор(его имя в виде строки), верните результат двух чисел, к которым был применен этот оператор.

// a и b оба будут положительными целыми числами, и a всегда будут первым числом в операции и b всегда вторым.

// Четыре оператора: «сложить», «вычесть», «делить», «умножить».

// Несколько примеров: (Ввод1, Ввод2, Ввод3-- > Вывод)

// 5, 2, "add"      -- > 7
// 5, 2, "subtract" -- > 3
// 5, 2, "multiply" -- > 10
// 5, 2, "divide"   -- > 2.5
// Попробуйте сделать это без использования операторов if!

const arithmetic = (a, b, operator) => operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : operator === 'divide' ? a / b : false;

const arithmetic = (a, b, operator) => ({
  'add': a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide': a / b
}[operator]);

console.log(arithmetic(8, 2, "subtract"))