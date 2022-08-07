/*
https://www.codewars.com/kata/586c1cf4b98de0399300001d/

Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.
*/

// my solution
function combat(health, damage) {
  let result = health - damage;
  return result < 0 ? 0 : result;
}

//! alternative solution
function combat(health, damage) {
  return Math.max(health - damage, 0);
}
