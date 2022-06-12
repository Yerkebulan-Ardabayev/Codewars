// Научите Снупи и Скуби - Ду лаять, используя объектные методы.В настоящее время только Снупи может лаять, а не Скуби - Ду.

//   snoopy.bark(); // return "Woof"
// scoobydoo.bark(); // undefined
// Используйте прототипы методов, чтобы все собаки могли лаять

let snoopy = new Dog("Beagle");
let scoobydoo = new Dog("Great Dane");

function Dog(breed) {
  this.breed = breed;
}

Dog.prototype.bark = function () {
  return "Woof";
};

