/*
https://www.codewars.com/kata/529eef7a9194e0cbc1000255

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// my solution
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Kata {
  public static boolean isAnagram(String test, String original) {
    return sorted(test).equals(sorted(original));
  }
  
  public static String sorted(String s) {
    return Stream.of(s.toLowerCase().split(""))
            .sorted()
            .collect(Collectors.joining());
  }
}