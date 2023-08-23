/*
https://www.codewars.com/kata/5663f5305102699bad000056

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

// my solution
import java.util.Arrays;
import java.util.IntSummaryStatistics;

class MaxDiffLength {    
    public static int mxdiflg(String[] a1, String[] a2) {
        if (a1.length == 0 || a2.length == 0) {
            return -1;
        }
        
        IntSummaryStatistics stats1 = Arrays.stream(a1).mapToInt(String::length).summaryStatistics();
        IntSummaryStatistics stats2 = Arrays.stream(a2).mapToInt(String::length).summaryStatistics();

        return Math.max(stats1.getMax() - stats2.getMin(), stats2.getMax() - stats1.getMin());
    }
}