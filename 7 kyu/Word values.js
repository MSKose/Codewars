/*
https://www.codewars.com/kata/598d91785d4ce3ec4f000018/

Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.
*/

function wordValue(a) {
    return a.map((x, y) => [...x].reduce((a,b) => a + (b !== ' ' && (b.charCodeAt(0) - 96)), 0) * (y+1))
}
// this question is similar to 6 kyu, see my explanation there if need be

//! alternative-solution
function wordValue(a) {
    return a.map((s,i) => (i+1)*[...s].reduce((a,c) => a + c.charCodeAt(0)%32, 0))
}
/*
taking modulus 32, it's just brilliant. How does that work you might ask. Well
since alphabet starts from 97, modulus 32 would give exactly what we want. But 
wait, there's spaces to check too? Yeap, and since ' '.charCodeAt(0) is 32 you
don't have to worry about that. Again, this is brilliant 
*/