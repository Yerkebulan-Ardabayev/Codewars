function truncate(str, maxlength) {
  let maxlength = 20;
  if (str.length > maxlength) {
    return str.slice(-3, maxlength) + '...'
  }
  return str;

}

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}