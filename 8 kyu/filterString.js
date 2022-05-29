// Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в которой удален переданный символ во всех его позициях.Регистр символов важен.

const str = 'If I look back I am lost';
const filterString = (str, letter) => {
  return str.split('').filter(el => el !== letter).join('');  
};
console.log(filterString(str, 'k'));

// const filterString = (str, char) => {
//   let i = 0;
//   let result = '';
//   while (i < str.length) {
//     const currentChar = str[i];
//     if (currentChar !== char) {
//       result = `${result}${currentChar}`;
//     }
//     i += 1;
//   }

//   return result;
// };