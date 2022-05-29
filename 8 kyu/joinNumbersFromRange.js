// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку

const joinNumbersFromRange = (nums, times) => {
  // Нейтральный элемент для строк – пустая строка
  let result = '';
  let i = nums;

  while (i <= times) {
    result = `${result}${i}`;
    i = i + 1;
  }

  return result;
};