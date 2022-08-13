/*
https://www.codewars.com/kata/514a024011ea4fb54200004b

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// my solution
function domainName(url) {
  let x = url.split("http://");
  let y = x.join("").split("https://");
  let z = y.join("").split("www.");
  let result = z.join("").split(".");
  return result[0];
}

//! alternative-solution-1
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}
// nice one

//! alternative-solution-2
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
// I hate Regex lol

//! alternative-solution-3
domainName = (url) =>
    url.includes("www")
    ? url.split(".")[1]
    : url.includes("http")
    ? url.split("//")[1].split(".")[0]
    : url.split(".")[0];
