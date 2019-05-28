//This is from FreeCodeCamp exercises.  I want to see if I can solve it another way using same functions or with 'reduce' function.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);