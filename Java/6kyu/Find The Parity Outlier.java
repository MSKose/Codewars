/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

// my solution
import java.util.Arrays;

public class FindOutlier {
    static int find(int[] integers) {
        int num1 = Math.abs(integers[0] % 2);
        int num2 = Math.abs(integers[1] % 2);
        int num3 = Math.abs(integers[2] % 2);
        int evenOrOdd = (num1 + num2 + num3) > 1 ? 0 : 1;
        for (int i : integers) {
            if (Math.abs(i) % 2 == evenOrOdd) return i;
        }
        return -1;
    }
}