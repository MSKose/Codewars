/*
https://www.codewars.com/kata/52fb87703c1351ebd200081f

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

// my solution
const ordinals = x => {
  if (x >= 4 && x <= 20) {return 'th'} 
  else if (x % 10 === 1) {return 'st'} 
  else if (x % 10 === 2) {return 'nd'} 
  else if (x % 10 === 3) {return 'rd'} 
  else {return 'th'}
}

const whatCentury = (year) => {
  const num = (year.slice(2) === '00' ? +year.slice(0, 2) : +year.slice(0, 2) + 1);
  const ord = ordinals(num);
  return num.toString() + ord;
}