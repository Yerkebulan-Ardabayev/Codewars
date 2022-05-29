// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n - ный элемент переведен в верхний регистр.n – задается на входе в функцию.

// Для определения каждого n - ного элемента понадобится остаток от деления %.

const makeItFunny = (str, n) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if ((i + 1) % n === 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

console.log(makeItFunny('I never look back', 5));
