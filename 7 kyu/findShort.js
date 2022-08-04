// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//   Просто, учитывая строку слов, вернуть длину кратчайшего слова(слов).

// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

const findShort = s => {
  const result = Math.min(...s.split(' ').map((word) => word.length));
  return result;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));