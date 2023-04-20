/*
https://www.codewars.com/kata/56a115cadb39a2faa000001e

Your task is to convert a given number into a string with commas added for easier readability. The number should be rounded to 3 decimal places and the commas should be added at intervals of three digits before the decimal point. There does not need to be a comma at the end of the number.

You will receive both positive and negative numbers.

Examples
commas(1) == "1"
commas(1000) == "1,000"
commas(100.2346) == "100.235"
commas(1000000000.23) == "1,000,000,000.23"
commas(-1) == "-1"
commas(-1000000.123) == "-1,000,000.123"
*/

// my solution
function commas(num){
  [a, b] = num.toString().split('.');
  com = (+num).toFixed(3).split('.')[1];
  a = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  b = b && com ? '.' + com.replace(/0+$/, '') : '';
  return a + b;
}