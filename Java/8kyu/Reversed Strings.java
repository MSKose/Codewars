/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


// my solution
import java.util.stream.IntStream;

public class Kata {
  public static String solution(String str) {
    StringBuilder res = new StringBuilder();
    
    for (int i = str.length() - 1; i >= 0; i--) {
      res.append(str.charAt(i));
    }
    
    return res.toString();
  }
}

//! alternative-solution
public class Kata {
    public static String solution(String str) {
      return new StringBuilder(str).reverse().toString();
    }
}