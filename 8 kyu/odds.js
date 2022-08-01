// Are arrow functions odd ?

// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]-- > [1, 3, 5]
// [2, 4, 6]-- > []

// Время проверить свои базовые знания в функциях! Вернуть шансы из списка:

// [1, 2, 3, 4, 5]-- > [1, 3, 5]
// [2, 4, 6]-- > []

const odds = values =>  values.filter((e) => { return e % 2 !== 0 });

console.log(odds([2, 4, 6]));
console.log(odds([1, 2, 3, 4, 5, 6]));