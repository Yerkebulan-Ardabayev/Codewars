// Is a number prime ?

//   Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//   Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive.You may be given negative numbers as well (or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out.Numbers go up to 2 ^ 31(or similar, depending on language).Looping all the way up to n, or n / 2, will be too slow.
//   Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение true или false в зависимости от того, является ли целое число простым.

// Согласно Википедии, простое число(или простое число) — это натуральное число, большее, чем 1 не имеющее положительных делителей, кроме 1 самого себя.

//   Требования
// Вы можете предположить, что вам будет предоставлен целочисленный ввод.
// Нельзя предполагать, что целое число будет только положительным.Вам также могут быть даны отрицательные числа(или 0).
// ПРИМЕЧАНИЕ о производительности: никаких сложных оптимизаций не требуется, но даже самые тривиальные решения могут истечь.Числа доходят до 2 ^ 31(или около того, в зависимости от языка).Цикл до n, или n / 2, будет слишком медленным.
//   Пример
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  const maximumDividor = Math.sqrt(num) + 1;
  for (let i = 2; i < maximumDividor; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}