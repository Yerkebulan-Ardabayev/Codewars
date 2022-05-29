// Реализуйте функцию hasChar(), которая проверяет(с учётом регистра), содержит ли строка указанную букву.Функция принимает два параметра:

// Строка
// Буква для поиска


const hasChar = (str, char) => str.includes(char) || false;

console.log(hasChar("Hello", "H")); 
console.log(hasChar("Hello", "h"));
console.log(hasChar("Hello", "O"));


// const hasChar = (str, char) => {
//   let i = 0;
//   while (i < str.length) {
//     if (str[i] === char) {
//       return true;
//     }
//     i += 1;
//   }
//   return false;
// }
