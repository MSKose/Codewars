/*
https://www.codewars.com/kata/5a71939d373c2e634200008e

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

// my solution
import java.util.concurrent.atomic.AtomicInteger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

class Solution{
    public static String solve(String s) {
        String reversedStr = new StringBuilder(s.replace(" ", "")).reverse().toString();
        AtomicInteger index = new AtomicInteger(0);
        return Pattern.compile("[a-z]").matcher(s)
            .replaceAll(r -> String.valueOf(reversedStr.charAt(index.getAndIncrement())));
    }
}