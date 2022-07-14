// Training JS #4: Basic data types--Array
// In javascript, Array is one of basic data types.Define an empty array can use var arr = new Array() or var arr = []

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length - 1].

// If we want to add new elements to the array, you can use the array method: push().It can add an element to the end of the array.Instead, if we want to remove the last element of the array, you can use the array method: pop().for example:

// var arr = [1, 2, 3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]
// Task
// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

// 1. getLength(arr)    should return length of arr
// 2. getFirst(arr)     should return the first element of arr
// 3. getLast(arr)      should return the last element of arr
// 4. pushElement(arr)  should push an element to arr, and then return arr
// 5. popElement(arr)   should pop an element from arr, and then return arr

// В javascript массив является одним из основных типов данных.Определить пустой массив можно с помощью var arr = new Array()илиvar arr = []

// Массив имеет атрибут: length, если существует массив с именем arr, с помощью которого arr.length можно узнать, сколько элементов содержится в массиве.

// Каждый элемент в массиве имеет index, используйте arr[index]для получения значения элемента.

// index всегда начинайте с 0, поэтому первый элемент массива равен arr[0], последний элемент массива равен arr[arr.length - 1].

// Если мы хотим добавить новые элементы в массив, вы можете использовать метод массива: push().Он может добавить элемент в конец массива.Вместо этого, если мы хотим удалить последний элемент массива, вы можете использовать метод массива: pop().Например:

// var arr = [1, 2, 3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]

// Задача
// Я написал пять функций, каждая функция получает параметр: arr(массив), вы должны что - то закодировать с помощью arr.

//     1. getLength(arr)    should return length of arr
// 2. getFirst(arr)     should return the first element of arr
// 3. getLast(arr)      should return the last element of arr
// 4. pushElement(arr)  should push an element to arr, and then return arr
// 5. popElement(arr)   should pop an element from arr, and then return arr

function getLength(arr) {
  //return length of arr
  return ?
}
function getFirst(arr) {
  //return the first element of arr
  return ?
}
function getLast(arr) {
  //return the last element of arr
  return ?
}
function pushElement(arr) {
  var el = 1;
  //push el to arr

  return arr
}
function popElement(arr) {
  //pop an element from arr

  return ?
}