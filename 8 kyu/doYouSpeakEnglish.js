// Given a string of arbitrary length with any ascii characters.Write a function to determine whether the string contains the whole word "English".

// The order of characters is important-- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter-- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

// Дана строка произвольной длины с любыми символами ascii.Напишите функцию, которая определяет, содержит ли строка слово «английский» целиком.

// Порядок символов важен — строка «abcEnglishdef» верна, а «abcnEglishsef» — нет.

// Прописная или строчная буква не имеет значения - "eNglisH" тоже правильно.

// Возвращаемое значение в виде логических значений, true, если строка содержит «английский», false, если нет.

const spEng = (s) => s.includes('English'); 