// Thinkful - Number Drills: Pixelart planning

// You're laying out a rad pixel art mural to paint on your living room wall in homage to Paul Robertson, your favorite pixel artist.

// You want your work to be perfect down to the millimeter.You haven't decided on the dimensions of your piece, how large you want your pixels to be, or which wall you want to use. You just know that you want to fit an exact number of pixels.

// To help decide those things you've decided to write a function, is_divisible() that will tell you whether a wall of a certain length can exactly fit an integer number of pixels of a certain length.

// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters.It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False.For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// >>> def equals_three(num):
// >>>     return num == 3
//   >>> equals_three(5)
// False
//   >>> equals_three(3)
// True

// Вы наклеиваете потрясающую фреску в стиле пиксель - арт, чтобы нарисовать ее на стене гостиной в знак уважения к Полу Робертсону, вашему любимому пиксельному художнику.

// Вы хотите, чтобы ваша работа была идеальной до миллиметра.Вы не определились с размерами вашего произведения, размером пикселей или стеной, которую вы хотите использовать.Вы просто знаете, что хотите уместить точное количество пикселей.

// Чтобы помочь решить эти вещи, вы решили написать функцию, is_divisible()которая сообщит вам, может ли стена определенной длины точно соответствовать целому числу пикселей определенной длины.

// Ваша функция должна принимать два аргумента: размер стены в миллиметрах и размер пикселя в миллиметрах.Он должен вернуться True, если вы можете разместить точное количество пикселей на стене, в противном случае он должен вернуть False.Например is_divisible(4050, 27)должен вернуть True, а is_divisible(4066, 27)должен вернуть False.

// >>> def equals_three(num):
// >>>     return num == 3
//   >>> equals_three(5)
// False
//   >>> equals_three(3)
// True
const isDivisible = (wallLength, pixelSize) => wallLength % pixelSize === 0 ? true : false;
console.log(isDivisible(4050, 27));
console.log(isDivisible(4066, 27));