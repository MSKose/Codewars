/*
https://www.codewars.com/kata/5601409514fc93442500010b

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// my solution
function betterThanAverage(classPoints, yourPoints) {
  let counter = 0;
  let avg = classPoints.concat(yourPoints);
  for (let x of avg) {
    counter += x;
  }
  return counter / classPoints.length <= yourPoints;
}

//! alternative-solution
function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a, b) => a + b, 0) <= yourPoints;
}
