// Nickname Generator

// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

// If the 3rd letter is a consonant, return the first 3 letters.

//   nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// If the 3rd letter is a vowel, return the first 4 letters.

//   nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// If the string is less than 4 characters, return "Error: Name too short".

//   Notes:

// Vowels are "aeiou", so discount the letter "y".
// Input will always be a string.
// Input will always have the first letter capitalised and the rest lowercase(e.g.Sam).
// The input can be modified

// Генератор псевдонимов

// Напишите функцию, nicknameGenerator которая принимает имя строки в качестве аргумента и возвращает первые 3 или 4 буквы в качестве псевдонима.

//   Если 3 - я буква согласная, верните первые 3 буквы.

//     nickname("Robert") //=> "Rob"
// nickname("Kimberly") //=> "Kim"
// nickname("Samantha") //=> "Sam"
// Если 3 - я буква гласная, верните первые 4 буквы.

//   nickname("Jeannie") //=> "Jean"
// nickname("Douglas") //=> "Doug"
// nickname("Gregory") //=> "Greg"
// Если строка содержит менее 4 символов, вернуть "Ошибка: имя слишком короткое".

//   Заметки:

// Гласные "aeiou", так что не обращайте внимания на букву "y".
// Ввод всегда будет строкой.
// При вводе первая буква всегда будет заглавной, а остальные строчными(например, Сэм).
// Вход можно изменить

function nicknameGenerator(name) {
  let logoName = name.toLowerCase();

  let logoNameUp = logoName[0].toUpperCase();

  if (logoNameUp.length < 4 && logoName.length < 4) {
    return "Error: Name too short";
  }
  if (logoName[2] === "aeiou") {

    return `${logoNameUp}${logoName.slice(1, 3)}`;
  }
  if (logoName[2].includes("aeiou")) {

    return `${logoNameUp}${logoName.slice(1, 3)}`;
  }
  if (logoName[2] !== "aeiou" || logoName[3] !== "aeiou") {

    return `${logoNameUp}${logoName.slice(1, 3)}`;
  }
}
console.log(nicknameGenerator("Melissa"));

function nicknameGenerator(name) {
  if (name.length < 4) return "Error: Name too short";
  if (name[2].match(/[aeuio]/)) return name.slice(0, 4)
  return name.slice(0, 3)
}

const nicknameGenerator = (name) => name.length < 4 ? 'Error: Name too short' : name.substring(0, 'aeiou'.indexOf(name[2]) === -1 ? 3 : 4);
