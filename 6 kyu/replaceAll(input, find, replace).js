/*
https://www.codewars.com/kata/52aaf51822e82a808100066b

Isn't it annoying how "string".replace("find", "replace"); only replaces the first match of the find string? Write a function, replaceAll(input, find, replace); that will replace all matches of the given find string with the given replace string.

The function will always be called with three strings, so don't worry about validating the arguments.

As with the original "string".replace(find, replace), if find is an empty string, it should match in-between each character, effectively inserting replace in-between each character, including the start and end of the string. I've given you some tests for this to make it a little clearer.
*/

// my solution
function replaceAll(input, find, replace) {
  if (find == "") {
    return input === ""
      ? replace + input.split("").join(replace)
      : replace + input.split("").join(replace) + replace;
  } else {
    return input.split(find).join(replace);
  }
}

//! alternative solution-1
function replaceAll(input, find, rep) {
  let arr = input.split(find);
  if (find.length === 0) {
    arr.unshift("");
    arr.push("");
  }
  return arr.join(rep);
}
/*
This makes a lot of sense
*/

//! alternative solution-2 (with regex)
function replaceAll(a, b, c) {
  return a.replace(new RegExp(b.replace(/\W/g, "\\$&"), "g"), c);
}

//! alternative solution-3 (with regex)
function replaceAll(input, find, replace) {
  return input.replace(RegExp(find.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), "g"), replace);
}

