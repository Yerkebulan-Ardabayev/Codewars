// Grasshopper - Grade book

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Зачетная книжка
// Завершите функцию, чтобы она нашла среднее значение трех переданных ей баллов и вернула буквенное значение, связанное с этой оценкой.

// Числовая оценка	Письмо Оценка
// 90 <= оценка <= 100	«А»
// 80 <= оценка < 90	'Б'
// 70 <= оценка < 80	'С'
// 60 <= оценка < 70	'Д'
// 0 <= оценка < 60	'Ф'
// Все проверенные значения находятся в диапазоне от 0 до 100. Нет необходимости проверять наличие отрицательных значений или значений больше 100.

function getGrade(s1, s2, s3) {
  let MiddleScore = Math.floor((s1 + s2 + s3) / 3);
  console.log(MiddleScore)

  if (MiddleScore >= 90) {
    return 'A';
  }
  else if (MiddleScore >= 80) {
    return 'B';
  }
  else if (MiddleScore >= 70) {
    return 'C';
  }
  else if (MiddleScore >= 60) {
    return 'D';
  }
  return 'F';
};

function getGrade(s1, s2, s3) {
  let s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

function getGrade(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length;

  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F';
}

const getGrade = (a, b, c) => 'FFFFFFDCBAA'.charAt((a + b + c) / 3 / 10);


