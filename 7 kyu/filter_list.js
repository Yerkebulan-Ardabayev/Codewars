// List Filtering

// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

//   Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]


// В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

//   Пример
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

const filter_list = l => { 
  let newArr = [];
  return l.filter((e) => {
    if (e === +e)
    {
      return newArr.push(e);
    }
  });
}

function filter_list(l) {
  return l.filter(function (v) { return typeof v == 'number' })
}

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, "a", "b", 0, 15]))
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))