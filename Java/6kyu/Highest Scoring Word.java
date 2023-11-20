/*
https://www.codewars.com/kata/57eb8fcdf670e99d9b000272


Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

// my solution
import java.util.Arrays;

public class Kata {
    public static String high(String s) {
        int highest = 0;
        String res = "";
        
        for (String text: s.split(" ")) {
            int textCharCount = text.chars().map(c -> c - 96).sum();

            if (highest < textCharCount) {
                highest = textCharCount;
                res = text;
            }
        }
        
        return res;
    }
}