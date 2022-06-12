// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power(ie multiplies number by itself power times).

//   Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

// Цель состоит в том, чтобы создать функцию ' numberToPower(number, power)', которая "поднимает" значение numberдо power(т.е.умножает number на себя power раз).

//   Примеры
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Примечание: Math.powи некоторые другие Mathфункции, такие как eval()и **, отключены.

function numberToPower(number, power) {
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}

function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
 
}

function numberToPower(number, power) {
  let total = 1;
  for (i = 0; i < power; i++) {
    total *= number
  }
  return total;
}

console.log(numberToPower(3, 2));
