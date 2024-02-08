/*
https://www.codewars.com/kata/56419475931903e9d1000087

A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

Rather than spending hours trying to find the bug itself, you decide to try and decode it.

If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.
*/

// my solution
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function oneDown(str) {
    if (typeof str !== "string") {return "Input is not a string";}
    let res = "";
    
    for (s of str) {
        if (s.toLowerCase() != s.toUpperCase()) {
            if (s == "A") res += 'z';
            else res += ALPHA[(ALPHA.indexOf(s) - 1)];
        } else {
            res += s
        }
    }

    return res;
}