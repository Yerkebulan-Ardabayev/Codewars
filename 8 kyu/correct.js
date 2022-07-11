// Correct the mistakes of the character recognition software

// Character recognition software is widely used to digitise printed texts.Thus the texts can be edited, searched and stored on a computer.

// When documents(especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text.You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов.Таким образом, тексты можно редактировать, искать и сохранять на компьютере.

// Когда документы(особенно довольно старые, написанные на пишущей машинке) оцифровываются, программы распознавания символов часто допускают ошибки.

// Ваша задача - исправить ошибки в оцифрованном тексте.Вам нужно только исправить следующие ошибки:

// S неверно истолковывается как 5
// O неверно истолковывается как 0
// I неверно истолковывается как 1
// Тестовые случаи содержат числа только по ошибке.

function correct(string) {
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");
}
