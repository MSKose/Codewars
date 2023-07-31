/*
https://www.codewars.com/kata/57f609022f4d534f05000024

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// my solution
class Solution {
    static int stray(int[] numbers) {
        int first = numbers[0];
        int last = numbers[numbers.length - 1];
        
        if (first == last) {
            for (int i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] != first) {
                return numbers[i];
            }
            }
        } 
        
        return numbers[1] == first ? last : numbers[1] == last ? first : numbers[1];
    }
}