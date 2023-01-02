/*
https://www.codewars.com/kata/5848565e273af816fb000449

Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encrypt_this("Hello") == "72olle"
encrypt_this("good") == "103doo"
encrypt_this("hello world") == "104olle 119drlo"
*/

// my solution
const encryptThis = function (text) {
  let result = [];

  for (let i of text.split(" ")) {
    i = [...i];

    if (i.length <= 2) {
      i[0] = i[0].charCodeAt();
    } else {
      [i[0], i[1], i[i.length - 1]] = [i[0].charCodeAt(), i[i.length - 1], i[1]];
    }

    result.push(i.join(""));
  }

  return result.join(" ");
};

//! alternative-solution
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');