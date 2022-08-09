/*
https://www.codewars.com/kata/513e08acc600c94f01000001/

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

// my solution
function rgb(r, g, b) {
  function hex(a) {
    if (a <= 0) return "00";
    if (a > 255) return "FF";
    return a.toString(16).toUpperCase().padStart(2, "0");
  }
  return hex(r) + hex(g) + hex(b);
}

//! alternative solution-1
const rgb = (...args) => {
  return args
    .map((el) =>(el > 255 ? 255 : el < 0 ? 0 : el).toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
};

//! alternative solution-2 (without toString)
function decToHex(n) {
  var mods = [];
  var num = n;
  var mod;
  const HEXHASH = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  while (num > 0) {
    mod = num % 16;
    mod >= 10 ? mods.push(HEXHASH[mod]) : mods.push(mod);
    num = Math.floor(num / 16);
  }

  return mods
    .reverse()
    .map(function (n) {
      return n.toString();
    })
    .join("");
}

//decToHex(148);

function fillZeroes(s) {
  if (s.length === 0) return "00";
  if (s.length === 1) return "0" + s;
  return s;
}

function rgb(r, g, b) {
  var args = Array.prototype.slice.call(arguments).map(function (n) {
    return n > 255 ? 255 : n;
  });

  var red = decToHex(args[0]);
  var green = decToHex(args[1]);
  var blue = decToHex(args[2]);

  return fillZeroes(red) + fillZeroes(green) + fillZeroes(blue);
}
