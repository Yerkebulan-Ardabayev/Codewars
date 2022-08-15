// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order.The array will always include at least 2 items.If there are two or more oldest age, then return both of them in array format.

// For example(Input-- > Output):

// [1, 2, 10, 8]-- > [8, 10]
// [1, 5, 87, 45, 8, 8]-- > [45, 87]
//   [1, 3, 10, 0])--> [3, 10]

//   Необходимо завершить функцию / метод двух старейших возрастов.Он должен принимать массив чисел в качестве аргумента и возвращать два самых высоких числа в массиве.Возвращаемое значение должно быть массивом в формате[second oldest age, oldest age].

// Порядок передаваемых чисел может быть любым.Массив всегда будет включать как минимум 2 элемента.Если есть два или более старших возраста, верните их оба в формате массива.

//   Например(Ввод-- > Вывод):

// [1, 2, 10, 8]-- > [8, 10]
// [1, 5, 87, 45, 8, 8]-- > [45, 87]
//   [1, 3, 10, 0])--> [3, 10]

const twoOldestAges = ages => ages.sort((a, b) => a - b).slice(-2);
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]))