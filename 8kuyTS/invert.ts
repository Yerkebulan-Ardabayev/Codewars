// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Учитывая набор чисел, верните добавку, обратную каждому из них. Каждое положительное становится отрицательным, а отрицательное становится положительным.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

export const invert = (array: number[]): number[] => array ? array.map((el: number) => -el) : []; 