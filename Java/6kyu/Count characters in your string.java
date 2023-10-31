/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

// my solution
import java.util.Map;
import java.util.HashMap;

public class Kata {
    public static Map<Character, Integer> count(String str) {
        Map<Character, Integer> dict = new HashMap<>();

        for (char c : str.toCharArray()) {
            dict.put(c, dict.getOrDefault(c, 0) + 1);
        }

        return dict;
    }
}

//! alternative-solution
import java.util.Map;
import java.util.stream.Collectors;

public class Kata {
    public static Map<Character, Integer> count(String str) {
        return str
                .chars()
                .mapToObj(character -> (char) character)
                .collect(Collectors.toMap(character -> character, character -> 1, Integer::sum));
    }
}