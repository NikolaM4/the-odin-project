const removeFromArray = function (array, ...elements) {
  let elementsLength = elements.length;
  let positionOfElementInArray = 0;
  for (let i = 0; i < elementsLength; i++) {
    if (array.indexOf(elements[i]) != -1) {
      positionOfElementInArray = array.indexOf(elements[i]);
      array.splice(positionOfElementInArray, 1);
    }
  }
  return array;
};
// Do not edit below this line
module.exports = removeFromArray;
