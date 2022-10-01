/*
https://www.codewars.com/kata/577bd026df78c19bca0002c0

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

// my solution
function correct(string){
	let result = ''
  
  for (i of string) {
    if (i === '5'){
      result += 'S'
    }else if (i === '0'){
      result += 'O'
    }else if (i === '1'){
      result += 'I'
    }else {
      result += i
    }
  }
  
  return result
}

//! alternative-solution-1
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
  );
// wow, this is amazing  

//! alternative-solution-2
const correct = string =>
  string.replace(/\d/g, val => `OI   S`[val]);
// oh my, this so clever