/*
https://www.codewars.com/kata/59e9f404fc3c49ab24000112

Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

// my solution
const nerdify = (txt) => txt.replace(/l/g, '1').replace(/e/gi, '3').replace(/a/gi, '4');

//! alternative-solution-1
const nerdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));

//! alternative-solution-2
function nerdify(txt) {
    return txt.replace(/[AaEel]/g, c => "44331"["AaEel".indexOf(c)])
}