/*
https://www.codewars.com/kata/5842df8ccbd22792a4000245

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/

// my solution
function expandedForm(num) {
    return num.toString().split('').map((x,y,z) => x*10**(z.length-1-y)).filter(x => x!=0).join(' + ')
}
// at first I thought of doing it with reverse and x*10**y but then I had to use two reverses
// then I figured the constant z.length-1-y which essentially treats as if reverse to 10th power


//! alternative-solution-1
function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
}
// nice touch with repeat there

//! alternative-solution-2
function expandedForm(num) {
    return num.toString()
              .split('')
              .map( (val,i,arr) => val.padEnd(arr.length-i,0) )
              .filter(val => val > 0)
              .join(" + ")
}
// more about padEnd in mdn docs

