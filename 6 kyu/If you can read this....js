/*
https://www.codewars.com/kata/586538146b56991861000293

The idea for this kata came from 9gag today:

The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet

Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

// my solution
const to_nato = (words) =>
  words
    .toLowerCase()
    .replace(/[^a-z,.!?]/g, '')
    .replace(/[a-z,.!?]/g, x => `${NATO[x] || x} `)
    .trim();