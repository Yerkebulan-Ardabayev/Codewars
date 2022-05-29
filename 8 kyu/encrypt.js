// Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются.Из - за этого их атаки перестали быть внезапными.Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму.Она бы брала текст и переставляла в нем каждые два подряд идущих символа.

//   encrypt('move'); // 'omev'
// encrypt('attack'); // 'taatkc'
// // Если число символов нечётное
// // то последний символ остается на своем месте
// encrypt('go!'); // 'og!'
// Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.

//   Подумайте.Может ли эта функция расшифровать зашифрованное сообщение ?


// function encrypt(text) {
//   let newText = "";
//   let i = 0;
//   if (text.length % 2 !== 0) {
//     return newText += text[i + 1] + text[i] + text[i + 2] + text[i + 3];
//   }
//     else if (text.length % 2 === 0) {
//     for (i; i < text.length; i += 2) {
//     newText += text[i + 1] + text[i];
//   } 
//   return newText;
//   }
// }

// console.log(encrypt('fo!'));
// console.log(encrypt('back!'));
// console.log(encrypt('attack'));

const encrypt = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
}
console.log(encrypt('fo!'));
console.log(encrypt('back!'));
console.log(encrypt('attack'));