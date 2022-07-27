// Create a function that takes a string and an integer(n).

// The function should return a string that repeats the input string n number of times.

// If anything other than a string is passed in you should return "Not a string"

// Example
// "Hi", 2 -- > "HiHi"
// 1234, 5 -- > "Not a string"

// Создайте функцию, которая принимает строку и целое число(n).

// Функция должна возвращать строку, которая повторяет входную строку n определенное количество раз.

// Если передано что - либо, кроме строки, вы должны вернуться"Not a string"

// Пример
// "Hi", 2 -- > "HiHi"
// 1234, 5 -- > "Not a string"

const repeatIt = (str, n) => !str ? "Not a string" : str.repeat(n);

const repeatIt = (str, n) => {
  if (typeof str !== "string") return "Not a string";
  return str.repeat(n);
}

console.log(repeatIt("*", 3));
console.log(repeatIt("Hello", 11));