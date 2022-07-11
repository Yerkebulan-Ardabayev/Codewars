//lottery Ticket

// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// Время выиграть в лотерею!

// Учитывая лотерейный билет (билет), представленный массивом массивов с двумя значениями, вы должны выяснить, выиграли ли вы джекпот.

// Пример билета:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// Для этого вы должны сначала подсчитать «мини-выигрыши» в своем билете. Каждый подмассив содержит как строку, так и число. Если код любого из символов в строке совпадает с числом, вы получаете мини-выигрыш. Обратите внимание, что у вас может быть только один мини-выигрыш на подмассив.

// После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением (выигрышем). Если ваша сумма больше или равна (выигрыш), верните «Победитель!». В противном случае верните «Неудачник!».

// Все входные данные будут в правильном формате. Струны на билетах не всегда одинаковой длины.


function bingo(ticket, win){
  if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
  {
    return "Winner!";
  }
  return "Loser!";
}