// Напишите вызываемую функцию, repeatStr которая повторяет заданную строку string точное количество n раз.

function repeatStr(n, str) {
  if (!str) {
    return " ".repeat(n);
  } else {
    return str.repeat(n);
  }
}
console.log(repeatStr(5, "#"));