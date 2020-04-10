module.exports = getIndex = (target, array, startIndex=0, endIndex=false) => {
  if(!endIndex) endIndex = array.length - 1;
  if(array.length <= 0) return false;

  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(array[middleIndex] === target) {
      return middleIndex;
    }

    array[middleIndex] < target 
      ? startIndex = middleIndex + 1
      : endIndex = middleIndex - 1;
  }
  return -1
}