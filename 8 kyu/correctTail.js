// Is this my tail ?

//   Some new animals have arrived at the zoo.The zoo keeper is concerned that perhaps the animals do not have the right tails.To help her, you must correct the broken function to make sure that the second argument(tail), is the same as the last letter of the first argument(body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// В зоопарк прибыли новые животные.Смотритель зоопарка обеспокоен тем, что, возможно, у животных неправильные хвосты.Чтобы помочь ей, вы должны исправить сломанную функцию, чтобы убедиться, что второй аргумент(хвост) совпадает с последней буквой первого аргумента(тело) - иначе хвост не подходит!

// Если хвост правильный, верните true, иначе верните false.

// Аргументы всегда будут непустыми строками и обычными буквами.

const correctTail = (body, tail) => {
  let sub = body.substr(body.length - (tail.length));
  if (sub === tail) {
    return true;
  }
  else return false;
}

 