/*
https://www.codewars.com/kata/57a6633153ba33189e000074

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// my solution
import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import org.apache.commons.lang3.tuple.Pair;

public class Solution {
    public static List<Pair<Character, Integer>> orderedCount(String text) {
        Set<Character> charSet = new HashSet<>();
        List<Pair<Character, Integer>> res = new ArrayList<>();

        for (char c : text.toCharArray()) {
            if (charSet.add(c)) {
                int count = (int) text.chars().filter(x -> x == c).count();
                res.add(Pair.of(c, count));
            }
        }

        return res;
    }
}