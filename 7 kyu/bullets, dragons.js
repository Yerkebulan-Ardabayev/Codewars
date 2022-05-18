function hero(bullets, dragons) {
  let maxBul = 2 * dragons;
  if (bullets >= maxBul) {
    return true;
  }
  else if (bullets < maxBul) {
    return false
  }
}