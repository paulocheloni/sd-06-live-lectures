
function rectangleArea(side1, side2) {
  if (typeof side1 !== 'number' || typeof side2 !== 'number') {
    return null
  }

  if (side1 <= 0 && side2 <= 0) {
    return null;
  }

  return side1 * side2;
}

module.exports = rectangleArea;