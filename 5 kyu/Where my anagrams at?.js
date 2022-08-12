/*
https://www.codewars.com/kata/523a86aa4230ebb5420001e1/

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

// my solution
function anagrams(word, words) {
    let sorted = [...word].sort().join('')
    let a = []
    for (let i=0; i<words.length; i++){
      if ([...words[i]].sort().join('') === sorted){
        a.push(words[i])
      }
    }
    return a
}
/*
what's interesting here with this question is that strings, containing 
the same characters in same order are of strictly equal. I couldn't believe
it the first time I saw but it what it is.
*/

//! alternative solution 
function anagrams(word, words) {
    // counts the characters in a given str and returns them as an object
    function countChars(s) {
      return [...s].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {});
    }
    
    // compares character count objects and returns true if their keys and values are the same
    function compareCharCounts(obj1, obj2) {
      if (Object.keys(obj1).length === Object.keys(obj2).length) {
        for (const key of Object.keys(obj1)) {
          if (obj1[key] !== obj2[key]) {
            return false;
          }
        }
        return true;
      }
      return false;
    }
    
    // goes through each word in the words array and compares the character count to the given word
    const anagramArr = [];
    for (let w of words) {
      if (w.length === word.length) {
        const wChars = countChars(w);
        const wordChar = countChars(word);
        if (compareCharCounts(wChars, wordChar)) {
          anagramArr.push(w);
        }
      }
    }
    return anagramArr;
}
// I chose this since it doesn't use sort()  