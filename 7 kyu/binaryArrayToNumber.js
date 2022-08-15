
// Ones and Zeros

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//   Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// Учитывая массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.

//   Например: [0, 0, 0, 1] рассматривается как 0001 двоичное представление 1.

// Примеры:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// Однако массивы могут иметь разную длину, а не только 4.

const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);
console.log(binaryArrayToNumber([0, 0, 0, 1]));