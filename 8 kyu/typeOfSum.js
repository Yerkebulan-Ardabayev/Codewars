// Return the type of the sum of the two arguments
// Возвращает тип суммы двух аргументов

function typeOfSum(a, b) {
  return typeof (a + b);
}

let typeOfSum = (_, o) => typeof (_ + o)