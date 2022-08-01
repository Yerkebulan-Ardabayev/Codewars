// Regexp Basics - is it a digit ?

//   Implement String#digit ? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit(0 - 9), false otherwise.

//   Реализовать String#digit ? (в Java StringUtils.isDigit(String)), который должен возвращаться true, если данный объект является цифрой(0 - 9), в false противном случае.


String.prototype.digit = (a) => Number(a) ? true : false;

String.prototype.digit = function () {
  return /^\d$/g.test(this);
}

console.log(digit(''));