// Fizz Buzz
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3)-- > [1, 2, "Fizz"]

// Возвращает массив, содержащий числа от 1 до N, где N — параметризованное значение.

// Однако замените определенные значения, если выполняется любое из следующих условий:

// Если значение кратно 3: вместо этого используйте значение «Шипение».
// Если значение кратно 5: вместо этого используйте значение «Buzz».
// Если значение кратно 3 и 5: вместо этого используйте значение «FizzBuzz».
// N никогда не будет меньше 1.

// Пример вызова метода:

// fizzbuzz(3)-- > [1, 2, "Fizz"]

const fizzbuzz = n => {
  return Array.apply(null, new Array(n)).map((e, i) => {
    return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
  })
}

