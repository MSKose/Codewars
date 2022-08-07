/*
https://www.codewars.com/kata/5a1d91698ba9145199000141/

Oh no!
The new zookeeper has lost track of how many animals are in the zoo because the last person to do the count thought it would be funny to do it in binary.

Write a function that can help the zookeper convert the binary count.
Input will be an object where key:value-pairs will represent an animal and a binary number.
Output should be an integer that equals the sum of all the animals in the zoo.
*/

// my solution
function countTheAnimals(animals) {
  let count = 0;
  for (const item of Object.values(animals)) {
    count += parseInt(item, 2);
  }
  return count;
}
/* 
remember, you can't use every method you can use with arrays in js. To iterate over your
object's values you can use for...of with Object.values()
also, recall that parseInt here converts binary string to decimal
*/

//! alternative-solution
const countTheAnimals = (l) =>
  Object.values(l).reduce((a, b) => a + parseInt(b, 2), 0);
/*
wow, this is amazing. Didn't know you could use reduce that way. Looks  like as long
as you convert your object to Object.values() or Object.keys() it  becomes iterable
*/
