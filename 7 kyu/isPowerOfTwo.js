// Power of two
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e.the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

//   Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2 ^ 0 = 1 and 0 is not a power of 2.

// Завершите функцию power_of_two / powerOfTwo(или эквивалентную, в зависимости от вашего языка), которая определяет, является ли заданное неотрицательное целое число степенью двойки.Из соответствующей записи в Википедии:

// степень двойки — это число вида 2 n, где n — целое число, то есть результат возведения в степень с числом два в качестве основания и целым числом n в качестве показателя степени.

// Вы можете предположить, что ввод всегда действителен.

//   Примеры
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Остерегайтесь некоторых граничных случаев — например, 1это степень, 2поскольку 2 ^ 0 = 1 и 0 не является степенью 2.

function isPowerOfTwo(n) {
  while (n >= 2) {
    n = n / 2;
  } return n === 1;
}

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));

}