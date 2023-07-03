/*
https://www.codewars.com/kata/57cc975ed542d3148f00015b

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

// my solution
import java.util.Arrays;

public class Solution {
    public static boolean check(Object[] a, Object x) {
      for (int i = 0; i < a.length; i++) {
        if (a[i] == x) return true;
      }
      return false;
    }
}

//! alternative-solution-1
import java.util.Arrays;

public class Solution {
    public static boolean check(Object[] a, Object x) {
        return Arrays.asList(a).contains(x);
    }
}

//! alternative-solution-2
import java.util.Arrays;

public class Solution {
    public static boolean check(Object[] a, Object x) {
        return Arrays.stream(a)
				.anyMatch(i -> x.equals(i));
    }
}