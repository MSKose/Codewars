/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// my solution
import java.util.stream.Collectors;

public class TwoToOne {    
    public static String longest (String s1, String s2) {
        return (s1 + s2).chars()
                .distinct()
                .sorted()
                .mapToObj(Character::toString)
                .collect(Collectors.joining(""));
    }
}

//! alternative-solution
import java.util.TreeSet;

public class TwoToOne {
    public static String longest (String s1, String s2) {
        TreeSet<String> set = new TreeSet<String>();
        StringBuilder sb = new StringBuilder();
        for (String i: (s1 + s2).split("")) {
            set.add(i);
        }
        for (String j: set) {
            sb.append(j);
        }
        return sb.toString();
    }
}