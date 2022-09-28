// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// Примеры ввода/вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export const xo = (str: string) => {
  const x = str.toLowerCase().split('').filter((item) => item === 'x').length;
  const o = str.toLowerCase().split('').filter((item) => item === 'o').length;
  return x === o;
};