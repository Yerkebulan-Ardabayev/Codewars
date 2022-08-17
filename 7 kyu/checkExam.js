// Check the exam

// The first input array is the key to the correct answers to an exam, like["a", "a", "b", "d"].The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length.Return the score for this array of answers, giving + 4 for each correct answer, -1 for each incorrect answer, and + 0 for each blank answer, represented as an empty string(in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0

// Первый входной массив — это ключ к правильным ответам на экзамене, например["а", "а", "б", "г"].Второй содержит представленные ответы студента.

// Два массива не пусты и имеют одинаковую длину.Возвращает оценку для этого массива ответов, давая + 4 за каждый правильный ответ, -1 за каждый неправильный ответ и + 0 за каждый пустой ответ, представленный в виде пустой строки(в C используется символ пробела).

// Если оценка < 0, вернуть 0.

// Например:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0
function checkExam(array1, array2) {
  let points = 0;

  array2.map((x, y) => {
    if (x === "") {
      points += 0;
    } else if (x === array1[y]) {
      points += 4;
    } else {
      points += -1;
    }
  })

  return points > 0 ? points : 0;
}