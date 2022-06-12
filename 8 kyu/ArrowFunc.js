// You will be given an array of numbers which can be used using the String.fromCharCode()(JS), Tools.FromCharCode()(C#) method to convert the number to a character.It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

//   Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Вам будет предоставлен массив чисел, который можно использовать с помощью метода String.fromCharCode()(JS), Tools.FromCharCode()(C#) для преобразования числа в символ.Рекомендуется отображать массив чисел и преобразовывать каждое число в соответствующий символ ascii.

//   Примеры
// Это пример того, как преобразовать число в символ ascii:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

const ArrowFunc = function (arr) {
  return String.fromCharCode.apply(0, arr);
  // return arr.map(x => String.fromCharCode(x)).join('');
  
}
// const ArrowFunc = (arr) => String.fromCharCode(...arr);