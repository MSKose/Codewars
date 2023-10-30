/*
https://www.codewars.com/kata/517abf86da9663f1d2000003/

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// my solution
import java.util.Arrays;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Solution{
    static String toCamelCase(String s){
        String[] arr = s.split("[-_]");
        return IntStream.range(0, arr.length)
                .mapToObj(i -> i == 0 ? arr[i] : arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1).toLowerCase())
                .collect(Collectors.joining());
    }
}


//! alternative-solution
import java.lang.StringBuilder;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution {
    static String toCamelCase(String s) {
        return Pattern.compile("[-|_](.)").matcher(s).replaceAll(r -> r.group(1).toUpperCase());
    }
}