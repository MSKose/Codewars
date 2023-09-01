/*
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

// my solution
class Solution{
    public static int solve(String s) {
        int max = 0;

        for (String a : s.split("[a-z]+")) {
            if (a != "" && Integer.parseInt(a) > max) {
                max = Integer.parseInt(a);
            }
        }

        return max;
    }
}