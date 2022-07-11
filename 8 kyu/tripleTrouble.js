// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups.Taking the first letter of all of the inputs and grouping them next to each other.Do this for every letter, see example below!

// E.g.Input: "aa", "bb", "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// Тройная проблема
// Создайте функцию, которая будет возвращать строку, объединяющую все буквы трех введенных строк в группы.Взяв первую букву всех входных данных и сгруппировав их рядом друг с другом.Сделайте это для каждой буквы, см.пример ниже!

// Например, ввод: "aa", "bb", "cc" => вывод: "abcabc"

// Примечание.Можно ожидать, что все входные данные будут одинаковой длины.

function tripleTrouble(one, two, three) {
  let output = [];
  for (let i = 0; i < one.length; i++) {
    output.push(one[i]);
    output.push(two[i]);
    output.push(three[i]);
  }
  return output.join('');
}