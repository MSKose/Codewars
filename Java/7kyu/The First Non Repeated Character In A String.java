/*
https://www.codewars.com/kata/570f6436b29c708a32000826

You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)
*/

// my solution
import java.util.Map;
import java.util.LinkedHashMap;

public class FirstNonRepeated {
    public static Character firstNonRepeated(String source) {
        LinkedHashMap<Character, Integer> dict = new LinkedHashMap<>();

        for (char c : source.toCharArray()) {
            dict.put(c, dict.getOrDefault(c, 0) + 1);
        }

        for (Map.Entry<Character, Integer> item : dict.entrySet()) {
            if (item.getValue() == 1) {
                return item.getKey();
            }
        }
        
        return null;
    }
}