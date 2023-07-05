/*
https://www.codewars.com/kata/553e8b195b853c6db4000048

Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

// my solution
import java.util.HashSet;
import java.util.Set;

public class Kata {
    public static boolean hasUniqueChars(String str) {
        Set<Character> uniqueCharacters = new HashSet<>();
        
        for (char c: str.toCharArray()) {
            uniqueCharacters.add(c);
        }
        
        return uniqueCharacters.size() == str.length();
    }
}