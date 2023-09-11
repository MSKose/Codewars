/*
https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// my solution
import java.util.Arrays;
import java.util.stream.Collectors;

public class Kata {
    public static String reverseWords(final String original) {
        if (original.replace(" ", "").length() == 0) {
            return original;
        }
        return Arrays.stream(original.split(" "))
                            .map(c -> new StringBuilder(c).reverse().toString())
                            .collect(Collectors.joining(" "));
        
    }
}