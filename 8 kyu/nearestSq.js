// Find Nearest square number

// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.


// Ваша задача состоит в том, чтобы найти ближайшее квадратное число, ближайшего_квадрата(n), положительного целого числа n.

const nearestSq = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);

console.log(nearestSq(10));