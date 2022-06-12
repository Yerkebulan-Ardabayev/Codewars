// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
//   Therefore, Pac wants to apply for the worldwide famous - and very demanding -
//     'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

//   Dear Pac,
//     This is the first exercise.Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time ?

//   (This might be helpful -> Math.random();)

// This is my first Kata, so please any feedback(especially on Test Cases) is welcome!

// Наш друг Пак наконец - то решил сделать карьеру в индустрии кодирования.
// Он новичок, ему нужно хорошо учиться.
// Поэтому Пак хочет подать заявку во всемирно известную и очень требовательную
// Академию C0d3r 1ns1d3 для начинающих.
// Чтобы присоединиться, Пак должен решить серию из 3 упражнений по «исправлению ошибок».
// Ему было отправлено электронное письмо из Академии со следующими инструкциями:

// Dear Pac,
//   This is the first exercise.Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// Этот код - беспорядок! Не могли бы вы помочь Паку исправить код вовремя ?

//   (Это может быть полезно -> Math.random(); )

// Это моя первая Ката, поэтому приветствуются любые отзывы(особенно о тестовых примерах)!

function yourFutureCareer() {
  let career = Math.random();
  if (career <= 0.32)
    return 'FrontEnd Developer';
  if (career <= 0.65)
    return 'BackEnd Developer';
  return 'Full-Stack Developer';
}