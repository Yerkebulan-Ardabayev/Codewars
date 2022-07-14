// Simple Fun #1: Seats in Theater

// Task
// Your friend advised you to see a new performance in the most popular theater in the city.He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull.It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

// The main problem is your shyness: you're afraid that you'll end up blocking the view(even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left.To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater(nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

// Example
// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96
// Here is what the theater looks like:



// Input / Output
// [input] integer nCols

// An integer, the number of theater's columns.

// Constraints: 1 ≤ nCols ≤ 1000.

// [input] integer nRows

// An integer, the number of theater's rows.

// Constraints: 1 ≤ nRows ≤ 1000.

// [input] integer col

// An integer, the column number of your own seat(with the rightmost column having index 1).

// Constraints: 1 ≤ col ≤ nCols.

// [input] integer row

// An integer, the row number of your own seat(with the front row having index 1).

// Constraints: 1 ≤ row ≤ nRows.

// [output] an integer
// The number of people who sit strictly behind you and in your column or to the left.

//   Задача
// Ваш друг посоветовал вам посмотреть новый спектакль в самом популярном театре города.Он много знает об искусстве, и его советы обычно хороши, но не в этот раз: спектакль получился ужасно скучным.Это так плохо, что хочется ускользнуть, что довольно просто, тем более, что выход находится сразу за вашим рядом слева.Все, что вам нужно сделать, это перелезть через свое сиденье и пробраться к выходу.

// Основная проблема в вашей застенчивости: вы боитесь, что в итоге перекроете обзор(пусть даже всего на пару секунд) всем людям, которые сидят позади вас и в вашей колонне или колоннах слева от вас.Чтобы набраться смелости, вы решаете подсчитать количество таких людей и посмотреть, сможете ли вы добраться до выхода, не потревожив слишком много людей.

// Учитывая общее количество рядов и столбцов в театре(nRows и nCols соответственно), а также ряд и столбец, в которых вы сидите, верните количество людей, которые сидят строго позади вас и в вашем столбце или слева, предполагая все места заняты.

//   Пример
// Для nCols = 16, nRows = 11, col = 5 и row = 3 вывод должен быть

// seatsInTheater(nCols, nRows, col, row) === 96
// Вот как выглядит театр:


// Ввод, вывод
// [input]целое числоnCols

// Целое число, количество колонн театра.

//   Ограничения: 1 ≤ nCols≤ 1000.

//   [input]целое числоnRows

// Целое число, количество рядов театра.

//   Ограничения: 1 ≤ nRows≤ 1000.

//   [input]целое числоcol

// Целое число, номер столбца вашего места(самый правый столбец имеет индекс 1).

//   Ограничения: 1 ≤ col≤ nCols.

// [input]целое числоrow

// Целое число, номер ряда вашего собственного места(с первым рядом, имеющим индекс 1).

//   Ограничения: 1 ≤ row≤ nRows.

// [output]целое число
// Количество людей, которые сидят строго позади вас и в вашей колонне или слева.
function seatsInTheater(nCols, nRows, col, row) {
  let colsBehind = nCols - col + 1;
  let rowsBehind = nRows - row;
  return colsBehind * rowsBehind;
}