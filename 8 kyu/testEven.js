// In this Kata we are passing a number(n) into a function.

// Your code will determine if the number passed is even(or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// В этом Ката мы передаем число(n) в функцию.

// Ваш код определит, является ли переданное число четным(или нет).

// Функция должна возвращать либо истину, либо ложь.

// Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.

// Поплавки с десятичной частью, отличной от нуля, считаются НЕчетными для этой ката.

function testEven(n) {
  return n % 2 === 0 ? true : false;
}