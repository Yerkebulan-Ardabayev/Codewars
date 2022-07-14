// Holiday VIII - Duty Free

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

// You will be given the high street price(normPrice), the duty free discount(discount) and the cost of the holiday.

// For example, if a bottle cost £10 normally and the discount in duty free was 10 %, you would save £1 per bottle.If your holiday cost £500, the answer you should return would be 500.

// All inputs will be integers.Please return an integer.Round down.

// Цель этого ката — выяснить, сколько бутылок виски из беспошлинной торговли вам придется купить, чтобы экономия по сравнению с обычной ценой в магазинах эффективно покрыла стоимость вашего отпуска.

// Вам будет предоставлена ​​розничная цена(normPrice), скидка беспошлинной торговли(дисконт) и стоимость праздника.

//   Например, если бутылка обычно стоит 10 фунтов стерлингов, а скидка в магазинах беспошлинной торговли составляет 10 %, вы сэкономите 1 фунт стерлингов за бутылку.Если ваш отпуск стоит 500 фунтов стерлингов, ответ, который вы должны вернуть, будет 500.

// Все входные данные будут целыми.Пожалуйста, верните целое число.Округлить вниз.

const dutyFree = (normPrice, discount, hol) => Math.trunc(hol / (normPrice * (discount / 100)));