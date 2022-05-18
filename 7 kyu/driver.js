// Водительский номер Великобритании состоит из личных данных водителя.Отдельные буквы и цифры могут быть закодированы с использованием приведенной ниже информации.
//   Правила
// 1–5: первые пять символов фамилии(дополненные 9, если менее 5 символов)

// 6: десятичная цифра года рождения(например, для 1987 года это будет 8)

// 7–8: месяц рождения(7 - й символ увеличивается на 5, если водитель — женщина, т.е. 51–62 вместо 01–12).

// 9–10: число в месяце рождения.

// 11: Цифра года от года рождения(например, для 1987 года это будет 7)

// 12–13: первые два инициала имени и отчества, дополненные цифрой 9, если отчества нет.

// 14: Произвольная цифра — обычно 9, но уменьшена для различения драйверов с общими первыми 13 символами.Мы всегда будем использовать 9

// 15–16: Две контрольные цифры компьютера.Мы всегда будем использовать "АА"
// Ваша задача — закодировать номер водительского удостоверения Великобритании, используя массив данных.Массив будет выглядеть

// data = ["John", "James", "Smith", "01-Jan-2000", "M"];
// Где элементы следующие

// 0 = имя
// 1 = Отчество(если есть)
// 2 = фамилия
// 3 = Дата рождения(в формате День Месяц Год это может включать полное название месяца или просто сокращение, т.е.сентябрь или сентябрь)
// 4 = M - мужчина или F - женщина
// Вам нужно будет вывести полный 16 - значный номер водительского удостоверения.

function driver(data) {
   

}