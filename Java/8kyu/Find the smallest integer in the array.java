/*
https://www.codewars.com/kata/55a2d7ebe362935a210000b2

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// my solution
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
      int min = args[0];
      
      for (int el: args) {
        min = Math.min(min, el);
      }
      
      return min;
    }
}

//! alternative-solution
import java.util.stream.IntStream;

public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
        return IntStream.of(args).min().getAsInt();
    }
}