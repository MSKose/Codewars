/*
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

// my solution
import java.util.Arrays;

public class Kata {
  public static int[] invert(int[] array) {
    return Arrays.stream(array).map(n -> -n).toArray();
  }
}

//! alternative-solution
public class StringUtils {
  public static String toAlternativeString(String string) {
        return string.chars()
                .map(c -> Character.isUpperCase(c) ? Character.toLowerCase(c) : Character.toUpperCase(c))
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();
  }
}