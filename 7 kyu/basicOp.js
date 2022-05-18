function basicOp(operation, value1, value2) {
  if (operation === '+') {
    return value1 + value2;
  }
  else if (operation === '-') {
    return value1 - value2;
  }
  else if (operation === '*') {
    return value1 * value2;
  }
  else if (operation === '/') {
    return value1 / value2;
  }
}



function basicOp(o, a, b) {
  return eval(a + o + b);
}