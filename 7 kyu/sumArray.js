//Сумма без наибольшего и наименьшего числа
function sumArray(array) {
  if (array === null || array === undefined || array.length <= 1) {
    return 0;
  }
  let min = Math.min.apply(null, array);
  let index = array.indexOf(min);
  array.splice(index, 1);

  let max = Math.max.apply(null, array);
  let index2 = array.indexOf(max);
  array.splice(index2, 1)

  let sumNumber = 0;
  for (let i = 0; i < array.length; i++) {
    sumNumber += array[i]
  }
  return sumNumber;
}
console.log(sumArray([0, 1, 6, 10, 10]));


function sumArray(array) {
  if (array === null || array === undefined || array.length <= 1) {
    return 0;
  }
  let sumNumber = 0;
  let max = Math.max(...array);
  let min = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    sumNumber += array[i]
  }
  return sumNumber - max - min;
} 