// Sum of Multiples

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers(positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"

// Твоя работа
// Найдите сумму всех кратных n ниже m

// Иметь ввиду
// n и m натуральные числа(целые положительные числа)
// m исключается из множества
// Примеры
// sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7) ==> "INVALID"

const sumMul = (n, m) => {
  if (0 >= n || m <= 0) return "INVALID";
  const l = m - (m % n || n);
  return (n + l) / 2 * l / n;
}