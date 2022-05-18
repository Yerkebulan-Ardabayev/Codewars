function doubleChar(str) {
  return str.split('').map(function (char) {
    return char + char;
  }).join('');
}
console.log(doubleChar('The'));

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
  let newWord = '';
  for (let i = 0; i < str.length; i++) {
    newWord = newWord + str[i].repeat(2)
  }
  return newWord;
}
console.log(doubleChar("String"));
