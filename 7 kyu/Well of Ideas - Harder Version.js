/*
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/

// my solution
function well(x){
    let a = x.flatMap(x => x).filter(y => String(y).toLowerCase() === 'good').length
    return a === 0 ? 'Fail!' : a < 3 ? 'Publish!' : 'I smell a series!'
}
/*
I literally just learned about flatMap() method today and this questions pops!
*/

//! alternative solution-1
function well( x ) {
    const $ = x.toString().toLowerCase().split(/good/g).length-1
    return $ > 2 ? 'I smell a series!' : $ > 0 ? 'Publish!' : 'Fail!'
}
/*
converting an array to a string. wow, this is clever.  
*/

//! alternative solution-2
function well(x){
    var count = 0;
    x.forEach(function(arr) {
        arr.forEach(function(elem) {
            if(typeof(elem) === 'string' && elem.toLowerCase() === 'good') {
                count++;
            }
        });
    });
    if(count === 0) {
        return 'Fail!';
    }
    return count > 2 ? 'I smell a series!' : 'Publish!';
}