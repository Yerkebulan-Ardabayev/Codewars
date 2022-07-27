// Swap Values

// I would like to be able to pass an array with two elements to my swapValues function to swap the values.However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// Я хотел бы иметь возможность передать массив с двумя элементами в мою функцию swapValues, чтобы поменять местами значения.Однако похоже, что значения не меняются.

// Вы можете понять, что здесь не так ?

const swapValues = (arr) => arr.reverse();

function swapValues() {
  var args = Array.prototype.slice.call(arguments)[0];
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}