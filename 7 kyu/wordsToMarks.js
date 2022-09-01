// Love vs friendship

// If　a = 1, b = 2, c = 3 ...z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love: -)

// The input will always be in lowercase and never be empty.

// Если　a = 1, b = 2, c = 3 ...z = 26

// затемl + o + v + e = 54

// а такжеf + r + i + e + n + d + s + h + i + p = 108

// Так friendshipв два раза сильнее love: -)

// Ввод всегда будет в нижнем регистре и никогда не будет пустым.

const wordsToMarks = string => {
  let result = 0
  for (let i = 0; i < string.length; i++) {
    result += parseInt(string[i], 36) - 9
  }
  return result
}
