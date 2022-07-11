// You will be given an array a and a value x.All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings.X can be either.

// Return true if the array contains the value, false if not.

// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить, содержит ли предоставленный массив значение.

// Массив может содержать числа или строки. Х может быть любым.

// Возврат true, если массив содержит значение, false если нет

function check(a, x) {
  return a.includes(x);

}

const check = (a, x) => a.some(v => v == x)

function check(a, x) {
  return (a.filter(v => v == x)).length > 0
}

function check(a, x) {
  return a.indexOf(x) > -1 ? true : false;
};

function check(a, x) {
  let b = a.filter(el => el == x);
  return b.length ? true : false;
}

function check(a = [], x) {
  let pass = false;
  a.forEach((element) => {
    if (element == x) {
      pass = true;
      return;
    }
  });

  return pass;
}

console.log(check(['what', 'a', 'great', 'kata'], 'kat'))