// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).

// если ИМТ <= 18,5, вернуть "Недостаточный вес"

// если ИМТ <= 25,0, вернуть «Нормальный»

// если ИМТ <= 30,0 вернуть "Избыточный вес"

// если ИМТ > 30, верните «Ожирение».

export const bmi = (weight: number, height: number): string => {
  const bmi = weight / height ** 2;
  switch (true) {
    case bmi <= 18.5:
      return 'Underweight';
    case bmi <= 25.0:
      return 'Normal';
    case bmi <= 30.0:
      return 'Overweight';
    default:
      return 'Obese';
  }
};

