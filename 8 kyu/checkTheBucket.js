
// Man in the west

// A western man is trying to find gold in a river.To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True / true.If not, return False / false.

// Западный мужчина пытается найти золото в реке.Для этого он пропускает ведро через речную почву, а затем проверяет, есть ли в ней золото.Однако он мог бы работать более продуктивно, если бы написал алгоритм, выполняющий эту работу за него.

//   Итак, нужно проверить, есть ли золото в ведре, и если да, то вернуть True / true.Если нет, верните False / false.

const checkTheBucket = bucket => {
  return bucket.includes('gold') ? true : false;
}
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]));