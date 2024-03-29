// Sum of Triangular Numbers

// Your task is to return the sum of Triangular Numbers up - to - and - including the nth Triangular Number.

// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

// [01]
// 02[03]
// 04 05[06]
// 07 08 09[10]
// 11 12 13 14[15]
// 16 17 18 19 20[21]
// e.g.If 4 is given: 1 + 3 + 6 + 10 = 20.

// Triangular Numbers cannot be negative so return 0 if a negative number is given.

// Ваша задача состоит в том, чтобы вернуть сумму треугольных чисел с точностью до nth треугольного числа.

// Треугольное число: «любой ряд чисел(1, 3, 6, 10, 15 и т.д.), полученный путем непрерывного суммирования натуральных чисел 1, 2, 3, 4, 5 и т.д.».

// [01]
// 02[03]
// 04 05[06]
// 07 08 09[10]
// 11 12 13 14[15]
// 16 17 18 19 20[21]
// например, если 4дано: 1 + 3 + 6 + 10 = 20.

// Треугольные числа не могут быть отрицательными, поэтому возвращайте 0, если указано отрицательное число.

const sumTriangularNumbers = n => n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;