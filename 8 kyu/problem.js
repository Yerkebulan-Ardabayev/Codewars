// Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».

function problem(x) {
  if (typeof x === '') {
    return Error;
  }
  else return x * 50 + 6;
}

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;