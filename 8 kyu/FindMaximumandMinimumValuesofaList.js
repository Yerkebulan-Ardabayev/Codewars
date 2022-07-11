// Find Maximum and Minimum Values of a List
// Your task is to make two functions(max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

//   Examples(Input -> Output)
//   * [4, 6, 2, 1, 9, 63, -134, 566] -> max = 566, min = -134
//     * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//       * [42, 54, 65, 87, 0] -> min = 0, max = 87
//         * [5] -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays / vectors.

// Ваша задача состоит в том, чтобы сделать две функции(max и min, или maximum и minimum, и т.д., в зависимости от языка), которые получают на вход список целых чисел и возвращают, соответственно, наибольшее и наименьшее число в этом списке.

//   Примеры(ввод -> вывод)
//   * [4, 6, 2, 1, 9, 63, -134, 566] -> max = 566, min = -134
//     * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//       * [42, 54, 65, 87, 0] -> min = 0, max = 87
//         * [5] -> min = 5, max = 5
// Заметки
// Вы можете считать, что пустых массивов / векторов не будет.

// Array.prototype.max = function () {
//   return Math.max.apply(null, this);
// };

// Array.prototype.min = function () {
//   return Math.min.apply(null, this);
// };

// let p = [35, 2, 65, 7, 8, 9, 12, 121, 33, 99];

// console.log(`Max value is: ${p.max()}` +
//   `\nMin value is: ${p.min()}`);


const getMaxNum = (numArray) => {
  return Math.max(...numArray);
}

console.log(getMaxNum([4, 6, 2, 1, 9, 63, -134, 566]));

const getMinNum = (numArray) => {
  return Math.min(...numArray);
}

var min = function (list) {

  return Math.min(...list);
}

var max = function (list) {

  return Math.max(...list);
}

console.log(getMinNum([4, 6, 2, 1, 9, 63, -134, 566]));