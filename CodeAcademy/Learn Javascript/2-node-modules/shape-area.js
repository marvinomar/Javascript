/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
function circleArea(radiusLength){
  const area = PI*Math.pow(radiusLength, 2);
  return area;
}
module.exports.circleArea = circleArea;
module.exports.squareArea = function squareArea(sideLength){
  const area = Math.pow(sideLength, 2);
  return area;

}
