// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// История
// Ваш интернет - магазин любит раздавать купоны для особых случаев.Некоторые клиенты пытаются обмануть систему, вводя неверные коды или используя купоны с истекшим сроком действия.

//   Задача
// Ваша миссия:
// Напишите вызываемую функцию checkCoupon, которая проверяет, что код купона действителен и не просрочен.

// Купон перестает быть действительным на следующий день ПОСЛЕ истечения срока действия.Все даты будут переданы в виде строк в следующем формате: "MONTH DATE, YEAR".

//   Примеры:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") === true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") === false

const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate);