// Просто удалите пробелы из строки, затем верните результирующую строку.

function noSpace(x) {
  return x.replace(/\s/g, "");
}
console.log(noSpace('s7c fd6yvfrtll'));

// function noSpace(x) {
//   return x.split(' ').join('')
// }
// console.log(noSpace('s7c fd6yvfrtll'));

// const noSpace = x => x.replace(/ /g, "");
// console.log(noSpace('s7c fd6yvfrtll'));