// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Напишите функцию, которая принимает целое число n и строку s в качестве параметров и возвращает строку, s повторяющуюся ровно столько n раз.

// Примеры (ввод -> вывод)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

export const repeatStr = (n: number, s: string): string => s.repeat(n);