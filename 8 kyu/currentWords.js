let words = ["Where", "do", "you", "want", "to", "go", "today?"];
let phrase = words.reduce(function (total, current, index) {
  if (index == 0) {
    return current;
  }
  else {
    return total + " " + current;
  }
}, "");
console.log(phrase);