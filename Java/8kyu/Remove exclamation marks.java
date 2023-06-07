/*
https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// my solution
class Solution {
    static String removeExclamationMarks(String s) {
        return s.replaceAll("!", "");
    }
}