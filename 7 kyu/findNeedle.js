function findNeedle(haystack) {
  const arrow = 'needle';
  for (let i = 0; i < haystack.length; i++) {
    if (arrow === haystack[i]) {
      return "found the needle at position " + i
    }
  }
  return false
}