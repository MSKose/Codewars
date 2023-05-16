/*
https://www.codewars.com/kata/56b1f01c247c01db92000076

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

// my solution
import java.util.Arrays;
import java.util.stream.Collectors;

public class Solution{
  public static String doubleChar(String s){
    return Arrays.stream(s.split("")).map(x -> x + x).collect(Collectors.joining());
  }
}

//! alternative-solution-1
import static java.util.stream.Collectors.joining;

interface Solution {
  static String doubleChar(String s) {
    return s.chars().mapToObj(c -> (char) c + "" + (char) c).collect(joining());
  }
}

//! alternative-solution-2
public class Solution {
    public static String doubleChar(String s) {
      return s.codePoints().collect(
        StringBuilder::new,
        (sb, c) -> sb.appendCodePoint(c).appendCodePoint(c),
        StringBuilder::append
      ).toString();
    }
}