function stray(numbers) {
  let d = numbers.sort();
  console.log(d)
  if (d[0] !== d[1]) {
    return d[0];
  } else {
    return d[d.length - 1];
  }
}