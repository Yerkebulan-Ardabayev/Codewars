// Short Long Short

// Given 2 strings, a and b, return a string of the form short + long + short, with the shorter string on the outside and the longer string on the inside.The strings will not be the same length, but they may be empty(zero length).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2)-- > output

//   ("1", "22")-- > "1221"
//     ("22", "1")-- > "1221"

// Учитывая 2 строки a и b, вернуть строку формы короткая + длинная + короткая, с более короткой строкой снаружи и более длинной строкой внутри.Строки не будут одинаковой длины, но могут быть пустыми(zerolength).

// Подсказка для пользователей R:

// Длина строки не всегда совпадает с количеством символов
// Например: (Ввод1, Ввод2)-- > вывод

//   ("1", "22")-- > "1221"
//     ("22", "1")-- > "1221"

function solution(a, b) {
  if (b.length > a.length) {
    return a + b + a;
  }
  if (b.length < a.length) {
    return b + a + b ;
  }

}
console.log(solution('45', '1'));
console.log(solution('13', '200'));