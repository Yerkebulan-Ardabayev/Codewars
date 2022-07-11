// Filling an array(part 1)
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N - 1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional.So you have to give it a default value.

// Нам нужен массив, но не какой - нибудь старый массив, а массив с содержимым!

// Напишите функцию, которая создает массив с числами 0 в N - 1 нем.

//   Например, следующий код создаст массив, содержащий числа 0 для 4:

// arr(5) // => [0,1,2,3,4]
// Примечание.Этот параметр является необязательным.Таким образом, вы должны дать ему значение по умолчанию.
const arr = N => {
  const arr = [];

  for (let i = 0; i < N; i += 1) {
    arr.push(i);
  }

  return arr;
};