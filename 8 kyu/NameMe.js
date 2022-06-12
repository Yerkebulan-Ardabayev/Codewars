// Мы хотим создать функцию - конструктор NameMe, которая принимает имя и фамилию в качестве параметров.Функция объединяет имя и фамилию и сохраняет значение в свойстве name.

// Мы уже реализовали эту функцию, но когда мы на самом деле запускаем код, свойство «имя» доступно, но «имя» и «фамилия» недоступны.Все свойства должны быть доступны.Можете ли вы найти, что с ним не так ? Также имеется тестовое приспособление
let n = new NameMe("John", "Doe");

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    name: this.firstName + " " + this.lastName,
    firstName: this.firstName,
    lastName: this.lastName
  };
}



console.log(n.firstName);
console.log(n.lastName);
console.log(n.name);