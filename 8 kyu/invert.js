// Учитывая набор чисел, верните добавку, обратную каждому из них.Каждое положительное становится отрицательным, а отрицательное становится положительным.

//   invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// Можно предположить, что все значения являются целыми числами.Не изменяйте входной массив / список.

// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

//   invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// You can assume that all values are integers.Do not mutate the input array / list.


function invert(array) {
  const newArr = [...array];
   return newArr.map(function(element) {
    console.log(element);
    return element * -1;
  });
  
  
}
console.log(invert([1, -2, 3, -4, 5]));