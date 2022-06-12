// Эта функция должна возвращать объект, но она не делает того, что должна.Что случилось ?

function mystery() {
  var results =
    { sanity: 'Hello' };
  return results;
}

console.log(mystery());
