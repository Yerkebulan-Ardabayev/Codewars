// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots.i.e.

// 1st(1)   2nd(3)    3rd(6)
//   *          **        ***
//            *         **
//                      *
//   You need to return the nth triangular number.You should return 0 for out of range values:

// For example: (Input-- > Output)

// 0 -- > 0
// 2 -- > 3
// 3 -- > 6
//   - 10 -- > 0

//   Треугольные числа называются так из - за равносторонней треугольной формы, которую они занимают, когда расположены точками.то есть

// 1st(1)   2nd(3)    3rd(6)
//   *          **        ***
//            *         **
//                      *
//   Вам нужно вернуть n - е треугольное число.Вы должны вернуть 0 для значений вне диапазона:

// Например: (Ввод-- > Вывод)

// 0 -- > 0
// 2 -- > 3
// 3 -- > 6
//   - 10 -- > 0

const triangular = n => n < 0 ? 0 : n * (n + 1) / 2;