// создать функцию, которая удаляет первый и последний символы строки.
// Вам дан один параметр, исходная строка.Вам не нужно беспокоиться о строках, содержащих менее двух символов

function removeChar(str) {
 return str.replace(/^.|.$/gi, "");
   
}
console.log(removeChar('eloquent'));

// function removeChar(str) {
//   return str.slice(1, -1);
// }