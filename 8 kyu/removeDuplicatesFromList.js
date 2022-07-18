// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата.

// Порядок последовательности должен оставаться прежним.

  const distinct = a => a.filter((e, i) => i === a.indexOf(e))

const distinct = a => [...new Set(a)];
const distinct = a => a.filter((e, i) => e !== i)


console.log(distinct([1, 2]))