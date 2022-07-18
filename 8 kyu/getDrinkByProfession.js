// L1: Bartender, drinks!

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else "Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization.For example, the input "pOLitiCIaN" should still return "Your tax dollars".

// Завершите функцию, которая получает на вход строку и выдает выходные данные в соответствии со следующей таблицей:

// Вход	Выход
// "Джаброни"	"Патрон Текила"
// «Школьный советник»	«Все, что связано с алкоголем»
// "Программист"	"Хипстерское крафтовое пиво"
// "Член велосипедной банды"	"Самогон"
// "Политик"	«Ваши налоговые доллары»
// "Рэпер"	"Кристалл"
// что - нибудь еще	"Пиво"
// Примечание: все остальное является случаем по умолчанию: если входные данные для функции не являются значениями в таблице, то возвращаемое значение должно быть "Beer".

//   Убедитесь, что вы охватили случаи, когда определенные слова не отображаются с правильным написанием заглавных букв.Например, ввод "pOLitiCIaN"должен по - прежнему возвращать "Your tax dollars".

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }

}