/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

// my solution
import java.util.Arrays;

public class Kata {
    public static int[] countPositivesSumNegatives(int[] input) {
      if (input == null || input.length == 0) {
        return new int[]{};
      }
      
      int posLen = (int) Arrays.stream(input).filter(x -> x > 0).count();
      int negLen = Arrays.stream(input).reduce(0, (a, b) -> b < 0 ? a + b : a);
      return new int[]{posLen, negLen};
    }
}