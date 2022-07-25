/*
https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/javascript

You are given a string of words (x), for each word within the string 
you need to turn the word 'inside out'. By this I mean the internal 
letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is 
odd, you are expected to leave the 'middle' letter of the word where 
it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/

// my solution
function insideOut(x){
    let arr = x.split(' ');
    let result = [];
    for (k of arr){
        let half = Math.ceil(k.length / 2)
        if(k.length%2){
            result.push(k.slice(0, half-1).split('').reverse().join('') + k[half-1] + k.slice(half).split('').reverse().join(''))
        }else {
            result.push(k.slice(0, half).split('').reverse().join('') + k.slice(half).split('').reverse().join(''))
        }
    }
    return result.join(' ')
}