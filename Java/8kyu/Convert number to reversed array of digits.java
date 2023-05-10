/*
https://www.codewars.com/kata/5583090cbe83f4fd8c000051

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// my solution
import java.util.Arrays;

public class Kata {
  public static int[] digitize(long n) {
    String x = new StringBuilder(("" + n)).reverse().toString();
    return Arrays.stream(x.split("")).mapToInt(Integer::parseInt).toArray();
  }
}

// my second solution
public class Kata {
    public static int[] digitize(long n) {
      int[] digits = String.valueOf(n).chars().map(Character::getNumericValue).toArray();
      int[] reversedDigits = new int[digits.length];
      
      for (int i = 0; i < digits.length; i++) {
        reversedDigits[i] = digits[digits.length - 1 - i];
      }
      
      return reversedDigits;
    }
}

//! alternative-solution
public class Kata {
    public static int[] digitize(long n) {
          return new StringBuilder().append(n)
                                    .reverse()
                                    .chars()
                                    .map(Character::getNumericValue)
                                    .toArray();
    }
}