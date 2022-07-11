// Build a function that returns an array of integers from n to 1 where n > 0.
// Example: n = 5 -- > [5, 4, 3, 2, 1]

// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n > 0.
// Пример: n = 5-- > [5, 4, 3, 2, 1]

const reverseSeq = n => {
  const N = n;
  const arr = Array.from({ length: N }, (_, index) => index + 1);
  return arr.reverse();
};

const reverseSeq = num => {
  return new Array(num)
    .fill()
    .map((d, i) => i + 1)
    .reverse()
};

console.log(reverseSeq(5))
