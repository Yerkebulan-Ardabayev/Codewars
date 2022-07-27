// simple calculator

// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

//   Example:
// calculator(1, 2, "+"); //=> result will be 3
// calculator(1, 2, "&"); //=> result will be "unknown value"
// calculator(1, "k", "*"); //=> result will be "unknown value"

// Вам необходимо создать простой калькулятор, который возвращает результат сложения, вычитания, умножения или деления двух чисел.

// Ваша функция будет принимать три аргумента:
// Первый и второй аргументы должны быть числами.
// Третий аргумент должен представлять собой знак, указывающий операцию, которую нужно выполнить над этими двумя числами.

// если переменные не являются числами или знак не принадлежит к списку выше, должно быть возвращено сообщение «неизвестное значение».

Пример:
calculator(1, 2, "+"); //=> result will be 3
calculator(1, 2, "&"); //=> result will be "unknown value"
calculator(1, "k", "*"); //=> result will be "unknown value"

const calculator = (a, b, sign) => sign === '+' ? a + b : sign === '-' ? a - b : sign === '*' ? a * b : sign === '/' ? a / b : "unknown value";
console.log(calculator(1, 2, "+"));
console.log(calculator(1, "k", "*"));