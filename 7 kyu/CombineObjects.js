// All input object properties will have only numeric values.Objects are combined together so that the values of matching keys are added together.

// An example:

// Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения.Объекты объединяются вместе, так что значения совпадающих ключей складываются вместе.

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }


const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) {
    a[x] = x in a ? a[x] + b[x] : b[x]
  };
  return a;
}, {});



function combine() {
  let args = Array.prototype.slice.call(arguments);
  let result = {};
  args.forEach(function (obj) {
    for (var key in obj) {
      if (result[key]) {
        result[key] += obj[key];
      } else {
        result[key] = obj[key];
      }
    }
  });
  return result;
}

function combine() {
  let obj = {}
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      obj[key] = obj[key] ? obj[key] + arguments[i][key] : arguments[i][key]
    }
  }
  return obj;
}