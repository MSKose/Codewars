/*
https://www.codewars.com/kata/580a4734d6df748060000045

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// my solution
class Solution {  
    public static String isSortedAndHow(int[] array) {
        boolean descending = true;
        boolean ascending = true;

        for (int i = 1; i < array.length; i++) {
            if (array[i] > array[i - 1]) {
                descending = false;
            } else if (array[i] < array[i - 1]) {
                ascending = false; 
            }
        }

        return ascending 
            ? "yes, ascending"
            : descending 
            ? "yes, descending"
            : "no";
    }
}