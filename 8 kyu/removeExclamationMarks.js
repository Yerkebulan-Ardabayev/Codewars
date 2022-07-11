// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function removeExclamationMarks(s) {
  let arr = s.split("");
  arr = arr.filter(function (e) {
    return e !== "!";
  })
  return arr.join("");
}

console.log(removeExclamationMarks("Hello World!"));