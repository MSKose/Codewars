/*
https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// my solution
import java.util.stream.Collectors;

public class DuplicateEncoder {
	static String encode(String word){
        String w = word.toLowerCase();
        return w.chars()
                .mapToObj(c -> w.indexOf(c) == w.lastIndexOf(c) ? "(" : ")")
                .collect(Collectors.joining());
    }
}

// my second solution
import java.util.Map;
import java.util.HashMap;

public class DuplicateEncoder {
    static String encode(String word){
        String w = word.toLowerCase();
        Map<Character, Integer> freq = new HashMap<>();
        StringBuilder sb = new StringBuilder();

        for (char c : w.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        for (char c : w.toCharArray()) {
            if (freq.get(c) == 1) sb.append("(");
            else sb.append(")");
        }

        return sb.toString();
    }
}