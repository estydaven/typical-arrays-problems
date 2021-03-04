
exports.min = function min (array) {
  if (!array || array.length === 0){
    return 0;
  }
  let arrMin = array.reduce((acc, item) => {
    if (item < acc){
      acc = item;
    }
    return acc;
  });
  return arrMin;
}

exports.max = function max (array) {
  if (!array || array.length === 0){
    return 0;
  }
  let arrMax = array.reduce((acc, item) => {
    if (item > acc){
      acc = item;
    }
    return acc;
  });
  return arrMax;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0){
    return 0;
  }
  
  let arrAvg = array.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  let numAvg = arrAvg / array.length;
  return numAvg;
}