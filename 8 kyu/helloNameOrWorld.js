// Hello, Name or World!
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given(or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter(Xxxx).

//   Examples:

// * With`name` = "john"  => return "Hello, John!"
//   * With`name` = "aliCE" => return "Hello, Alice!"
//     * With`name` not given
// or`name` = ""        => return "Hello, World!"


// Определите метод hello, который returns "Hello, Name!" к данному name, или говорит Привет, Мир! если имя не указано (или передано как пустая строка).

//   Предполагая, что name это a Stringи он проверяет опечатки пользователя, чтобы вернуть имя с первой заглавной буквой(Xxxx).

//     Примеры:

// * With`name` = "john"  => return "Hello, John!"
//   * With`name` = "aliCE" => return "Hello, Alice!"
//     * With`name` not given
// or`name` = ""        => return "Hello, World!"

function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}

function hello(name) {
  let newName1 = name.split("").shift().toUpperCase();
  console.log(newName1)
  let newName2 = name.split("").slice(1).join('').toLowerCase();
  console.log(newName2) 
  
  let newName3 = newName1 + newName2;
  console.log(newName3)
  
  return newName3 !== '' ? `Hello, ${newName3}!` : "Hello, World!";
}

console.log(hello('aliCE'));