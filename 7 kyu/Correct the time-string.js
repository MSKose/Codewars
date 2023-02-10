/*
https://www.codewars.com/kata/57873ab5e55533a2890000c7

A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// my solution
function timeCorrect(timestring) {
    if (timestring === ''){
      return '';
    }
    if (timestring === null){
      return null;
    }
    if (timestring.replace(/[0-9:]/g, '').length > 0){
       return null;
    }
          
    try {
      const x = timestring.split(':')
      if (x.length !== 3) {
        return null;
      }
      [h, m, s] = x;
      m = +m + ~~(+s / 60);
      s = String(+s % 60).padStart(2, '0');
      h = +h + ~~(+m / 60);
      m = String(+m % 60).padStart(2, '0');
      h = String(+h % 24).padStart(2, '0');
      return h + ':' + m + ':' + s;
    } catch {
      return null;
    }
}