// Clocky Mc Clock - Face

// Story
// Due to lack of maintenance the minute - hand has fallen off Town Hall clock face.

// And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

//   Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour - hand!

// What a bunch of cheapskates!

// Can you do it ?

//   Kata
// Given the angle(in degrees) of the hour - hand, return the time in 12 hour HH:MM format.Round down to the nearest minute.

//   Examples
// 12: 00 = 0 degrees

// 03: 00 = 90 degrees

// 06: 00 = 180 degrees

// 09: 00 = 270 degrees

// 12: 00 = 360 degrees

// Notes
// 0 <= angle <= 360

// Do not make any AM or PM assumptions for the HH:MM result.They are indistinguishable for this Kata.

// 3 o'clock is 03:00, not 15:00
// 7 minutes past midnight is 12: 07
// 7 minutes past noon is also 12: 07

// История
// Из - за отсутствия обслуживания минутная стрелка отвалилась от циферблата ратуши.

// И поскольку местный совет потерял большую часть наших налоговых денег из - за нигерийской аферы с электронной почтой, у него нет средств, чтобы правильно починить часы.

// Вместо этого они просят программистов - добровольцев написать код, который определяет время, просто взгляну в на оставшуюся часовую стрелку!

// Какая сборище скряг!

// Ты можешь сделать это ?

//   Ката
// Учитывая angle (в градусах) часовой стрелки, верните время в 12 - часовом формате ЧЧ: ММ. Округлить до ближайшей минуты.

//   Примеры
// 12: 00 = 0 градусов

// 03: 00 = 90 градусов

// 06: 00 = 180 градусов

// 09: 00 = 270 градусов

// 12: 00 = 360 градусов

// Заметки
// 0 <= angle <= 360

// Не делайте никаких предположений об утреннем или послеполуденном времени для результата ЧЧ: ММ. Они неразличимы для этого Ката.

// 3 часа. 03: 00, нет 15: 00
// 7 минут после полуночи это 12: 07
// 7 минут после полудня также 12: 07

const whatTimeIsIt = function (angle) {
  mins = angle * 2;
  h = Math.floor(mins / 60);
  m = Math.floor(mins % 60);
  if (h == 0) { h = "12" }
  if (h < 10) { h = "0" + h }
  if (m < 10) { m = "0" + m }
  return h + ":" + m;
}

const whatTimeIsIt = (deg) =>
  [deg / 30 | 0 || 12, deg % 30 * 2 | 0]
    .map(x => ('0' + x).slice(-2)).join(':');