// Friend or Foe ?

//   Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

//   friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]
// Note: keep the original order of the names in the output.
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не...

// Пример: ввод = ["Райан", "Киран", "Джейсон", "Юс"], вывод = ["Райан", "Юс"]

// то есть

// friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]
// Примечание: сохраните исходный порядок имен в выводе.

const friend = friends => friends.filter((e) => {return e.length === 4});
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));