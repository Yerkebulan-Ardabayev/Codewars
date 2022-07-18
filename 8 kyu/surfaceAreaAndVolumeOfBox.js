// Surface Area and Volume of a Box

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// Напишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива: [area, volume]

const getSize = (width, height, depth) => {
  let newArr = [];
  let surfaceBox = 2 * (width * height + width * depth + height * depth);
  let volumeBox = width * height * depth;
  newArr.push(surfaceBox, volumeBox);
  return newArr;
}
console.log(getSize(4, 2, 6))