// Switch / Case - Bug Fixing #6
// Oh no! Timmy's evalObject function doesn't work.He uses Switch / Cases to evaluate the given properties of an object, can you fix timmy's function?

// Переключатель / кейс — исправление ошибки № 6
// О, нет! Функция Тимми evalObject не работает.Он использует Switch / Cases для оценки заданных свойств объекта, можете ли вы исправить функцию timmy ?

function evalObject(value) {
  let result = 0;
  switch (value.operation) {
    case '+':
      return value.a + value.b;
    case '-':
      return value.a - value.b;
    case '*':
      return value.a * value.b;
    case '/':
      return value.a / value.b;
    case '%':
      return value.a % value.b;
    case '^':
      return Math.pow(value.a, value.b);
  }
  return result;
}

let ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '%': (a, b) => a % b,
  '^': Math.pow,
}

let evalObject = o => ops[o.operation](o.a, o.b)

const evalObject = value => ({
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '%': (a, b) => a % b,
  '^': Math.pow,
}[value.operation](value.a, value.b));