// Вот фрагмент кода:

// function getStatus(isBusy) {
//   var msg = (isBusy ? "busy" : "available");
//   return
//   {
//     status: msg
//   }
// }
// Ожидаемое поведение
// Функция должна возвращать словарь / объект / хэш с "status"ключом, значение которого может: "busy"или "available"в зависимости от значения истинности аргумента is_busy.

//   Но, как вы увидите после нажатия RUNили ATTEMPTв этом коде есть несколько ошибок, пожалуйста, исправьте их.

function getStatus(isBusy) {
 let msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}

console.log(getStatus());