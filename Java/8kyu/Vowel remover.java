/*
https://www.codewars.com/kata/5547929140907378f9000039/

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// my solution
public class Kata {
    public static String shortcut(String input) {
      return input.replaceAll("[aeiou]", "");
    }
}

//! alternative-solution
import java.util.*;
import java.util.stream.*;

public class Kata {
  public static String shortcut(String input) {
    return Arrays.stream(input.split("")).filter(c -> !"aeiou".contains(c)).collect(Collectors.joining());
  }
}