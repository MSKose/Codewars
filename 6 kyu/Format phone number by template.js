/*
https://www.codewars.com/kata/61393fd03e441f001ac9c7d4

Introduction
You need to write a function that will format a phone number by a template.

Task
You're given number and string.

If there are more digits than needed, they should be ignored

if there are less digits than needed, should return Invalid phone number

Examples
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(79052479075, "+# (###) ### ##-##") => "+7 (905) 247 90-75"
(79052479075, "+# ### ### ## ##") => "+7 905 247 90 75"
(81237068908090, "+## ### ### ## ##") => "+81 237 068 90 80"
(8123706890, "+## ### ### ##-##") => "Invalid phone number"
(911, "###") => "911"
(112, "+ () -") => "+ () -"
*/

// my solution
function formatNumber(number, template, numCount = 0) {
    number = String(number);
    if (template.replace(/[^#]/g, '').length > number.length) {
      return "Invalid phone number";
    }
    
    return [...template].map((el, idx) => el === '#' ? number[numCount++] : el).join``;
}