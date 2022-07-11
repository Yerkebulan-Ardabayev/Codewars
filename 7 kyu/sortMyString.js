// Odd - Even String Sort

// Given a string s.You have to return another string such that even - indexed and odd - indexed characters of s are grouped and groups are space - separated(see sample below)

// Note:
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

// Дана строка s. Вы должны вернуть другую строку, чтобы символы s с четным и нечетным индексом были сгруппированы, а группы разделены пробелами(см.Пример ниже)

// Примечание:
// 0 считается четным индексом.
// Все входные строки действительны без пробелов
// ввод: «Кодовые войны»
// вывод 'CdWr eas'

// С[0] = 'С'
// С[1] = 'о'
// С[2] = 'д'
// С[3] = 'е'
// С[4] = 'В'
// С[5] = 'а'
// С[6] = 'р'
// С[7] = 'с'
// Четные индексы 0, 2, 4, 6, поэтому у нас есть «CdWr», так как первая группа
// нечетная — 1, 3, 5, 7, поэтому вторая группа — «oeas».
// И последняя возвращаемая строка — «Cdwr oeas».



const sortMyString = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}