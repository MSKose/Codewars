/*
https://www.codewars.com/kata/5412509bd436bd33920011bc
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// my solution
function maskify(cc) {
  if (cc.length <= 4) return cc;

  return "#".repeat(cc.length - 4) + cc.slice(-4);
}

//! alternative-solution-1
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}
// damn, should've thought of this

//! alternative-solution-2
function maskify(cc) {
  return cc.replace(/.(?=....)/g, "#");
}
/*
see look-ahead zero-width assertion on here for reference:
https://www.regular-expressions.info/lookaround.html
*/

//! alternative-solution-3
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
// so /./ means anything like a number char special char space, etc
