/*
https://www.codewars.com/kata/571e9af407363dbf5700067c

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

// my solution
const squares = n => [...Array(n).keys()].map(foo => (foo + 1) * (foo + 1))

const range = (n, start, step) => Array.from({length: n}, (_, i) => i === 0 ? start : start + i*step);

const random = (n, min, max) => [min, max].concat(Array.from({length: n - 2}, () => Math.floor(Math.random() * (max - min + 1)) + min))

function isPrime(num) {
    if (num > 2 && num % 2 === 0) return false;
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const primes = n => {
  let result = [];
  let i = 2;
  
  while (result.length < n){
    if (isPrime(i)){
      result.push(i)
    }
    i++
  }
  return result
}