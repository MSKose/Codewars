/*
https://www.codewars.com/kata/58223370aef9fc03fd000071

Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "None".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

// my solution
import java.util.regex.Pattern;
import java.util.regex.MatchResult;
import java.util.stream.Collectors;

public class Solution {
    public static String dashatize(int num) {
        return Pattern.compile("[13579]|[02468]+")
                    .matcher(Integer.toString(num))
                    .results()
                    .map(MatchResult::group)
                    .collect(Collectors.joining("-"));
    }
}