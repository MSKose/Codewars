/*
https://www.codewars.com/kata/5ce04eadd103f4001edd8986

Your job is to list all of the numbers up to 2 ** n - 1 that contain a 1 at the same places/bits as the binary representation of b.b will be 1,2,4,8,etc.
For example: solution(4,2) would return [2,3,6,7,10,11,14,15].
The binary numbers from 1 to 16 are:
8 4 2 1 (place)
0 0 0 1
0 0 1 0
0 0 1 1
0 1 0 0
0 1 0 1
0 1 1 0
0 1 1 1
1 0 0 0
1 0 0 1
1 0 1 0
1 0 1 1
1 1 0 0
1 1 0 1
1 1 1 0
1 1 1 1
The numbers with a 1 in the 2's place are 2,3,6,7,10,11,14,and 15
Other examples:
solution(0,1) = []
solution(6,8) = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63]
If b = 0,return empty list.
*/

// my solution
function solution(n, b) {
    if (b === 0) {return []}
    const ones = Math.log2(b);
    const onesIndex = n - 1 - ones;
    let arr = [];
    
    for (let i = 1; i <= (2 ** n) - 1; i++) {
       if (i.toString(2).padStart(n, '0')[onesIndex] === '1') {
         arr.push(i);
       }
    }
    
   return arr;
}