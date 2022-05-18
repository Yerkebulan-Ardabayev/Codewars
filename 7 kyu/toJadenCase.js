String.prototype.toJadenCase = function () {
  return this.split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

String.prototype.toJadenCase = function () {
  let d = [];
  let s = this.toLowerCase().split(' ');
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    d.push(c[0].toUpperCase() + c.slice(1));
  }
  return d.join(' ');
};

