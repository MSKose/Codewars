/*
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// my solution
public class Sum {
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    int sum = 0, len1 = arr1.length, len2 = arr2.length;
    
    for (int i = 0; i < len1 + len2; i++) {
      if (i < len1) {
        sum += arr1[i];
      } else {
        sum += arr2[i - len1];
      }
    }
    
    return sum;
  }
}

//! alternative-solution
import java.util.stream.*;

public class Sum {
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
    return IntStream.of(arr1).sum() + IntStream.of(arr2).sum();
  }
}