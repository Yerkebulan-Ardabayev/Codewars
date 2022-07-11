// Count strings in objects

// Create a function strCount(takes an object as argument) that will count all string values inside an object.For example:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null
// })
//   //returns 3

//   Создайте функцию strCount(принимает объект в качестве аргумента), которая будет подсчитывать все строковые значения внутри объекта.Например:

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null
// })
//  returns 3


  function strCount(obj) {
    return Object.values({ ...obj }).reduce((c, v) => c.concat(v), []).filter(o => typeof o === 'string').length;
}

const strCount = obj =>
  typeof obj !== `string` ? Object.values(obj || {}).reduce((pre, val) => pre + strCount(val), 0) : 1;
  
function strCount(obj) {

  let c = 0;
  for (let i in obj) {
    if (typeof obj[i] == 'object') c += strCount(obj[i]);
    if (typeof obj[i] == 'string') c += 1
  }
  return c;

}


console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {}
}));
