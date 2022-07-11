// Arrow Sums
// Sum all the values in an array using Arrow style function
//   Task
// Your task is to complete the function in the string to Sum all the numbers in an array using the Arrow style function
//   NOTE:

//   Because eval hasnt caught up and cannot evaluate arrow style functions I have to do it manually.Your solution must contain the Arrow style function, the curly braces inside the reduce and the return statement because it must be manually converted to an old function style to test the validlity of the function itself. Your function will be returned to you when it is converted incase it fails(which is highly possible) if any issues occur please post in the discussion and provide your solution marked as spoiler, Thanks.

//   Стрелочные суммы
// Суммируйте все значения в массиве, используя функцию стиля стрелки
// Задача
// Ваша задача состоит в том, чтобы завершить функцию в строке, чтобы суммировать все числа в массиве, используя функцию стиля стрелки.
//   ПРИМЕЧАНИЕ:

// Поскольку eval не догнал и не может оценить функции стиля стрелки, мне приходится делать это вручную.Ваше решение должно содержать функцию в стиле Arrow, фигурные скобки внутри сокращения и оператор return, поскольку его необходимо вручную преобразовать в старый стиль функции, чтобы проверить правильность самой функции.Ваша функция будет возвращена вам, когда она будет преобразована, если она выйдет из строя(что весьма вероятно), если возникнут какие - либо проблемы, отправьте сообщение в обсуждение и предоставьте свое решение, помеченное как спойлер, спасибо.

const Sum = `sum = (arr) => arr.reduce((pre, val) => pre + val, 0);`;

const sum = function (arr) {
  return arr.reduce(function (acc, number) {
    return acc + number
  }, 0)
} 