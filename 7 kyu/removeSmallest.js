function removeSmallest(numbers) {
  const arr = [...numbers];
  let min = Math.min.apply(null, arr);
  let index = arr.indexOf(min);
  arr.splice(index, 1);
  return arr;
}


