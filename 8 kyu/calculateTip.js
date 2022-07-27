// Tip Calculator
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0 %
//   Poor: tip 5 %
//     Good: tip 10 %
//       Great: tip 15 %
//         Excellent: tip 20 %
//           The rating is case insensitive(so "great" = "GREAT").If an unrecognised rating is received, then you need to return:

// "Rating not recognised" in Javascript, Python and Ruby...
// ...or null in Java
// ...or - 1 in C#
// Because you're a nice person, you always round up the tip, regardless of the service.

// Заполните функцию, которая рассчитывает, сколько вам нужно чаевых, исходя из общей суммы счета и услуги.

// Вам необходимо учитывать следующие рейтинги:

// Ужасно: чаевые 0 %
//   Плохо: чаевые 5 %
//     Хорошо: чаевые 10 %
//       Отлично: чаевые 15 %
//         Отлично: чаевые 20 %
//           Рейтинг нечувствителен к регистру (поэтому "отлично" = "ОТЛИЧНО").Если получен непризнанный рейтинг, то нужно вернуть:

// "Rating not recognised"на Javascript, Python и Ruby...
// ...или null на Яве
// ...или - 1в С#
// Поскольку вы хороший человек, вы всегда округляете чаевые, независимо от услуги.
function calculateTip(amount, rating) {

  var rate = rating.toLowerCase();

  if (rate === "excellent") {
    return Math.ceil(amount * 20 / 100);
  }
  else if (rate === "great") {
    return Math.ceil(amount * 15 / 100);
  }

  else if (rate === "good") {
    return Math.ceil(amount * 10 / 100);
  }

  else if (rate === "poor") {
    return Math.ceil(amount * 5 / 100);
  }

  else if (rate === "terrible") {
    return Math.ceil(amount * 0 / 100);
  }

  else {
    return ("Rating not recognised");
  }

}
