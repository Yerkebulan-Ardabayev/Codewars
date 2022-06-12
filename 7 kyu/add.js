// 16 + 18=214
// For this kata you will have to forget how to add two numbers.

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates: -)

// You may assume both integers are positive integers.


function add(num1, num2) {
  const firstArr = String(num1).split("").reverse();
  console.log(firstArr);
  const secondArr = String(num2).split("").reverse();
  console.log(secondArr);
  const result = [];
  let length;

  if (firstArr.length > secondArr.length) {
    length = firstArr.length;
  } else {
    length = secondArr.length;
  }

  for (let i = 0; i < length; i++) {
    // Проверяем что элементы есть, либо заменяем их нулями.
    const a = (firstArr[i] === undefined || firstArr[i] === NaN || firstArr[i] === null) ? 0 : firstArr[i];

    const b = (secondArr[i] === undefined || secondArr[i] === NaN || secondArr[i] === null) ? 0 : secondArr[i];

    // Складываем элементы и записываем в результат.
    result.push(Number(a) + Number(b));
  }
  return result.reverse().join('');
}
console.log(add(38810, 1383));

// function add(num1, num2) {
//   num1 = ('' + num1).split('').reverse()
//   console.log(num1);
//   num2 = ('' + num2).split('').reverse()
//   console.log(num2);
//   let max = Math.max(num1.length, num2.length)
//   console.log(max);
//   let str = [];
//   console.log(str);
//   for (let i = 0; i < max; i++)
//     str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
//   console.log(str);
//   num1 = str.reverse().join('');
//   console.log(num1);
//   return parseInt(num1);
// }
// console.log(add(1222, 30277));

function add(a, b) {
  return a * b ? +`${add(a / 10 | 0, b / 10 | 0)}${a % 10 + b % 10}` : a + b
}