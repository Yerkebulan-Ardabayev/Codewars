let uniqueInOrder = function (iterable) {
  return [...iterable].filter((x, i) => x !== iterable[i - 1]);
}