// My head is at the wrong end!

// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back.You will be given an array which will have three values(tail, body, head).It is your job to re - arrange the array so that the animal is the right way round(head, body, tail).

// Same goes for all the other arrays / lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

// Ты в зоопарке... все сурикаты выглядят странно.Что - то пошло не так — кто - то поменял местами головы и хвосты!

// Спасите животных, переключив их обратно.Вам будет предоставлен массив, который будет иметь три значения(хвост, тело, голова).Ваша задача — переупорядочить массив так, чтобы животное располагалось в правильном порядке(голова, тело, хвост).

// То же самое касается всех других массивов / списков, которые вы получите в тестах: вы должны изменить позиции элементов с той же точной логикой.

//   Простые!

function fixTheMeerkat(arr) {
  
  return arr.reverse();
}
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));