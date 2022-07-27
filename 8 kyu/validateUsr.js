// Simple validation of a username with regex

// Write a simple regex to validate a username.Allowed characters are:

// lowercase letters,
//   numbers,
//   underscore
// Length should be between 4 and 16 characters(both included).

// Напишите простое регулярное выражение для проверки имени пользователя.Допустимые символы:

// строчные буквы,
//   числа,
//   подчеркивать
// Длина должна быть от 4 до 16 символов(включая оба).


const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);