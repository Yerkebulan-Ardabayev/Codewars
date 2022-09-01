// Sum of Minimums!

// Given a 2D(nested) list(array, vector, ..) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [[1, 2, 3, 4, 5]        #  minimum value of row is 1
//   , [5, 6, 7, 8, 9]        #  minimum value of row is 5
//   , [20, 21, 34, 56, 100]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non - empty list containing positive values.

// ENJOY CODING:)

// Учитывая двумерный(вложенный) список(массив, вектор, ..) размера m * n, ваша задача состоит в том, чтобы найти сумму минимальных значений в каждой строке.

//   Например:

// [[1, 2, 3, 4, 5]        #  minimum value of row is 1
//   , [5, 6, 7, 8, 9]        #  minimum value of row is 5
//   , [20, 21, 34, 56, 100]  #  minimum value of row is 20
// ]
// Таким образом, функция должна вернуться 26, потому что сумма минимумов равна 1 + 5 + 20 = 26.

// Примечание.Вам всегда будет предоставлен непустой список, содержащий положительные значения.


const sumOfMinimums = (arr) => arr.reduce((x, y) => x + Math.min(...y), 0);