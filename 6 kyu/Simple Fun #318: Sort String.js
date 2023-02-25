/*

*/

// my solution
function sortString(s){
  const alphaChars = [];
  const nonAlphaChars = [];

  for (const char of s) {
    if (/[a-zA-Z]/.test(char)) {
      alphaChars.push(char);
    } else {
      nonAlphaChars.push(char);
    }
  }

  alphaChars.sort((a, b) => {
    const A = a.toUpperCase();
    const B = b.toUpperCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  });

  let sortedString = '';
  let nonAlphaIndex = 0;
  for (const char of s) {
    if (/[a-zA-Z]/.test(char)) {
      sortedString += alphaChars.shift();
    } else {
      sortedString += nonAlphaChars[nonAlphaIndex];
      nonAlphaIndex++;
    }
  }

  return sortedString;
}