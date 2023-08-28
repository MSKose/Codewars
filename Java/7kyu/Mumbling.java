/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// my solution
public class Accumul {    
    public static String accum(String s) {
        String[] res = new String[s.length()];
        char[] c = s.toCharArray();

        for (int i = 0; i < c.length; i++) {
            res[i] = Character.toUpperCase(c[i]) + String.valueOf(c[i]).toLowerCase().repeat(i);
        }
    
        return String.join("-", res);
    }
}

//! alternative-solution
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Accumul {
    public static String accum(String s) {
        var chars = s.split("");

        return IntStream.range(0, chars.length)
                .mapToObj(i -> chars[i].toUpperCase() + chars[i].toLowerCase().repeat(i))
                .collect(Collectors.joining("-"));
    }
}