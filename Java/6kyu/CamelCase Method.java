/*
https://www.codewars.com/kata/587731fda577b3d1b0001196

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelcase("hello case") => HelloCase
camelcase("camel case word") => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

// my solution
import java.util.Arrays;
import java.util.stream.Collectors;

public class Solution {
    public static String camelCase(String str) {
        if (str.length() == 0) return "";
        return Arrays.stream(str.trim().split("\\s+"))
                .map(c -> c.isEmpty() ? "" : Character.toUpperCase(c.charAt(0)) + c.substring(1).toLowerCase())
                .collect(Collectors.joining());
    }
}