/*
https://www.codewars.com/kata/57241cafef90082e270012d8

Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.

For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.

To encrypt 'hello' you'd substitute as follows,

              abcdefghijklmnopqrstuvwxyz
  hello ==>   |||||||||||||||||||||||||| ==> bshhk
              wednsaybcfghijklmopqrtuvxz
hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.

Good Luck.
*/

// my solution
function keywordCipher(string, keyword) {
  string = string.toLowerCase();
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const combi = keyword + alpha;
  let cipher = "";
  let translationObj = {};

  for (let i = 0; i < combi.length; ++i) {
    if (!cipher.includes(combi[i])) {
      cipher += combi[i];
    }
  }

  for (let i = 0; i < cipher.length; ++i) {
    translationObj[alpha[i]] = cipher[i];
  }

  return string.replace(/[a-z]/g, (match) => translationObj[match]);
}

//! alternative-solution-1
function keywordCipher(string, keyword){
    var letter = 'abcdefghijklmnopqrstuvwxyz'
    var newKey = [...new Set(keyword + letter)]
    return string.toLowerCase().replace(/[a-z]/g, x => newKey[letter.indexOf(x)])
}