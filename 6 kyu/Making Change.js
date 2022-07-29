/*
https://www.codewars.com/kata/5365bb5d5d0266cd010009be/

Making Change
Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)

The argument passed in will be an integer representing the value in cents. The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Examples
makeChange(0)   //-->  {}
makeChange(1)   //-->  {"P":1}
makeChange(43)  //-->  {"Q":1, "D":1, "N":1, "P":3}
makeChange(91)  //-->  {"H":1, "Q":1, "D":1, "N":1, "P":1}
*/

// my solution
const makeChange = (amount) => {
  let values = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
  let hash = {};
  for (const [key, value] of Object.entries(values)) {
    const newKey = Math.floor(amount / value);
    if (newKey !== 0) hash[key] = newKey;
    amount = amount % value;
  }
  return hash;
};

/*
This is the first time I have used the computed property names
in a codewars solution and it has been useful ngl. Because if I
were to write hash.key the engine would not dynamically change 
according to key changes in every loop. 
*/

//! alternative-solution
const makeChange = (amount) => {
  var coins = { H: 50, Q: 25, D: 10, N: 5, P: 1 };
  var result = {};

  for (let x in coins) {
    while (amount >= coins[x]) {
      amount = amount - coins[x];
      result[x] = result[x] ? result[x] + 1 : 1;
    }
  }
  return result;
};
