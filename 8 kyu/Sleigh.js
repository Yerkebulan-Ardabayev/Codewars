// Sleigh Authentication

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password.If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!"(yes, even Santa has a secret password with uppercase and lowercase letters and special characters:D), the return value must be true.Otherwise it should return false.

//   Examples:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)

// Приближается Рождество, и многие люди мечтали прокатиться на санях Санты.Но, конечно же, пользоваться этим замечательным транспортом разрешено только самому Санте.А для того, чтобы убедиться, что только он может сесть в сани, существует механизм аутентификации.

// Ваша задача — реализовать authenticate()метод саней, который берет имя человека, желающего сесть на сани, и секретный пароль.Если и только если имя равно «Санта - Клаус», а пароль «Хо - хо - хо!» (да, даже у Санты есть секретный пароль с прописными и строчными буквами и специальными символами:D) , возвращаемое значение должно быть true.В противном случае он должен вернуться false.

//   Примеры:

// var sleigh = new Sleigh();
// sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

// sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
// sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
// sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
 return name === 'Santa Claus' && password === 'Ho Ho Ho!' ? true : false;
}
