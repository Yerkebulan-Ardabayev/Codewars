// Find the next perfect square!

// You might know some pretty large perfect squares.But what about the NEXT one ?

//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then - 1 should be returned.You may assume the parameter is non - negative.

//   Examples: (Input-- > Output)

// 121 -- > 144
// 625 -- > 676
// 114 -- > -1 since 114 is not a perfect square

// Возможно, вы знаете несколько довольно больших идеальных квадратов.Но как насчет СЛЕДУЮЩЕГО ?

//   Завершите findNextSquare метод, который находит следующий целочисленный идеальный квадрат после квадрата, переданного в качестве параметра.Напомним, что целочисленный совершенный квадрат — это целое число n, такое что sqrt(n) также является целым числом.

// Если параметр сам по себе не является идеальным квадратом - 1, его следует вернуть.Вы можете предположить, что параметр неотрицательный.

//   Примеры: (Ввод-- > Вывод)

// 121 -- > 144
// 625 -- > 676
// 114 -- > -1 since 114 is not a perfect square

const findNextSquare = sq => Math.pow(Math.trunc(Math.sqrt(sq)), 2) === sq ? Math.pow(Math.sqrt(sq) + 1,2) : -1;