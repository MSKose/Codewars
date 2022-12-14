/*
https://www.codewars.com/kata/552cd8624a414ec2b2000086

Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/

// my solution
function derDieDas(wort) {
  let vowelCount = wort.split(/[aeiouäöü]/i).length - 1;
  return vowelCount < 2
    ? `das ${wort}`
    : vowelCount > 3
    ? `der ${wort}`
    : `die ${wort}`;
}