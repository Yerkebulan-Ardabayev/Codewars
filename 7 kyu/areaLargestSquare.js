// Определить площадь наибольшего квадрата, который может вписаться в круг радиусом r.

function areaLargestSquare(r) {
  let square = 4 * r ** 2;
  let area = 0;
  for (let i = 1; i <= r; i++) {
    if (i ** 2 < square) {
      area = i ** 2;
    }

  }
  return area;
}


const capitalize = (str) => {
  const newStr = str;
  const name = newStr.slice(0, 1);
  const newName = name.toUpperCase();
  const surname = newName + newStr.slice(1);
  console.log(newName);
  console.log(newStr.slice(1));
  return surname;
}
console.log(capitalize('arya')); 
