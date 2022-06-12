// Invalid Login - Bug Fixing #11
// Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!

// Task
// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!

// Preloaded
// You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.

// Usage
// var database = new Database();
// // database.login('Timmy', 'password');

// Неверный логин — исправление ошибки № 11
// О нет! Тимми сменил отдел... но теперь он в сфере безопасности.Тимми, будучи лучшим программистом, пропустил некоторый плохой код.Вы должны помочь Тимми и отфильтровать любой внедренный код!

// Задача
// Ваша задача проста, найдите в строке пароля любой введенный код(внедренный код — это любая вещь, которая будет использоваться для использования недостатков в текущем коде, поэтому в основном все, что содержит || или //), если вы найдете что-либо, вы должны вернуться, "Wrong username or password!"потому что никто не любит кого-то пытаются обмануть их путь в!

// Предзагружено
// Вам будет предоставлен предварительно загруженный класс, вызываемый Databaseметодом, который loginпринимает два параметра usernameи password.Это общая функция входа в систему, которая проверит базу данных на наличие пользователя, которого она вернет, 'Successfully Logged in!'если он пройдет тест, или 'Wrong username or password!'если пароль неверен или имя пользователя не существует.

//   Применение
// var database = new Database();
// database.login('Timmy', 'password');

function validate(username, password) {
  for (let str of [username, password]) {
    if (/\/\/|\|\|/.test(str)) {
      return "Wrong username or password!";
    }
  }
  let valid = new Validator();
  return valid.login(username, password);
}