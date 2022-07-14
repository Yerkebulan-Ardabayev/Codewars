// Dollars and Cents
//The company you work for has just been awarded a contract to build a payment gateway.In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing(though you won't have to worry about a dangling period).

// Examples:

//   3 needs to become $3.00

// 3.1 needs to become $3.10

// Компания, в которой вы работаете, только что получила контракт на создание платежного шлюза.Чтобы ускорить процесс, вы вызвались создать функцию, которая будет принимать число с плавающей запятой и возвращать сумму, форматированную в долларах и центах.

// 39.99 becomes $39.99

// Остальная часть вашей команды позаботится о том, чтобы аргумент был очищен перед передачей в вашу функцию, хотя вам нужно будет учитывать добавление завершающих нулей, если они отсутствуют(хотя вам не придется беспокоиться о висячей точке).

//   Примеры:

//   3 needs to become $3.00

// 3.1 needs to become $3.10

const formatMoney = (amount) => `$${amount.toFixed(2)}`;
console.log(formatMoney(3.1))