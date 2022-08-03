/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// my solution
function humanReadable (seconds) {
    let hours = parseInt(seconds / 3600).toString().padStart(2, '0')
    let min = parseInt(seconds / 60 % 60).toString().padStart(2, '0')
    let sec = parseInt(seconds % 60).toString().padStart(2, '0')
    return `${hours}:${min}:${sec}`
}

//! alternative-solution
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
}