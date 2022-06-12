// Lexical this
// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
//   Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
// Лексическое это
// Завершите объект Person, выполнив функцию FillFriends, чтобы заполнить массив _friends для объекта person.
//   Выход
// Верните объект человека с заполненными функциями Name, Friends и FillFriends, которые заполнят ввод в свойство Friends

const Person = function () {
  let person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      this._friends = f;
    },
    get Name() {
      return this._name;
    }
  };
  return person;
};
     