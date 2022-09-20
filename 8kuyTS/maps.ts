// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3]-- > [2, 4, 6]

// Учитывая массив целых чисел, вернуть новый массив с удвоением каждого значения.

// Например:

// [1, 2, 3] --> [2, 4, 6]

export const maps = (x: number[]): number[] =>  x.map((el) => el * 2);