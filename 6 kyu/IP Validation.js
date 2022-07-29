/*
https://www.codewars.com/kata/515decfd9dcfc23bb6000006

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

// my solution. still needs some adjustment tho
const isValidIP = str => {
   return str
   .split('.')
   .filter(x => x.length==1 ? 0<=x && x<=9 : x.length > 1 && x[0] != 0).length == 4 
   ? str.split('.').filter(x => 0<=x && x<=255).length == 4 && str.split('.').filter(x => x.split('').every(e => Number.isInteger(+e))).length == 4 ? true : false : false
}

isValidIP("1.2.3.4");

//! alternative solution-1

const isValidIP = (ip) => {
  const octets = ip.split(".");
  if (octets.length !== 4) return false;
  if ([...ip].includes(" ") || [...ip].includes("\n")) return false;

  for (let octet of octets) {
    if (octet.replace(/[^a-zA-Z]+/g, "")) return false;
    if (parseInt(octet) < 0 || parseInt(octet) > 255) return false;
    if (octet[0] === "0" && octet.length != 1) return false;
    if (!octet && octet !== 0) return false;
  }

  return true;
};

//! alternative solution-2

const isValidIP = (str) => {
  let params = str.split(".");
  return params.length === 4 && params.every((param) => Number(param) < 256 && String(Number(param)) === param);
};
