/*
https://www.codewars.com/kata/5931614bb2f657c18c0001c3/

Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/

// my solution
function cutCancerCells(organism){
    let x = organism.split('');

    for (let i=0; i<x.length; i++){
        if (x[i] === 'C') {                                                  // checking if we are at 'C' 
            if (x[i-1] && x[i-1].charCodeAt() > 91 && x[i-1] !== 'c'){       // if's (see below for comments)
                x[i-1] = '-'                                                 // replaces with dummy character '-'
            }
            if (x[i+1] && x[i+1].charCodeAt() > 91 && x[i+1] !== 'c'){       // same goes for this if
                x[i+1] = '-'
            }
        }
    }
    return x.filter(x => x !== "-" && x !== "C" && x !== "c").join('')       // filtering out -, C, and c
}
/*
- if's: ok this is quiet interesting. The first part x[i-1] && means that if 
  x[i-1] exists do the following and if not nothing. Meaning C can be the very
  first element and in that caase x[i-1] would be undefined and we don't want that
  hence the (x[i-1] &&). The (x[i-1].charCodeAt() > 91) checks whether x[i-1] is 
  lowercase and finally (x[i-1] !== 'c') makes sure the character is not c 
*/

//! alternative solution
const cutCancerCells = s => s.replace( /[a-z]?C[a-z]?|c/g, "" ) ;
// everything's easy with regex lol