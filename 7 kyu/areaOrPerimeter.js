const areaOrPerimeter = function (l, w) {
  let QP = 2 * (l + w);
  let SQ = l ** 2;
  if (l === w) {
    return SQ
  }
  else if (l !== w) {
    return QP
  }
};

const areaOrPerimeter = function (l, w) { 
  return l === w ? l * l : 2 * (l + w);
  
};