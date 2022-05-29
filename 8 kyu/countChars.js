// То есть A и a с её точки зрения разные символы.Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

const countChars = (str, char) => {
  let i = 0;
  let count = 0;
  let lowerStr = str.toLowerCase();
  let lowChar = char.toLowerCase();
  while (i < str.length) {
    if (lowerStr[i] === lowChar) {
      // Считаем только подходящие символы
      count = count + 1;
    }
    // Счетчик увеличивается в любом случае
    i = i + 1;
  }

  return count;
};