/*
https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!
*/

// my solution
import java.util.Arrays;

public class Solution{
    public static int[] solve(String[] arr){
        int[] res = new int[arr.length];
        
        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            for (int k = 0; k < arr[i].length(); k++) {
            if (k + 1 == arr[i].toLowerCase().charAt(k) - 96) {
                count++;
            }
            }
            res[i] = count;
        }
        
        return res;
    }
}

//! alternative-solution
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Solution{
    public static String alphabet = "abcdefghijklmnopqrstuvwxyz";

    public static int countLetters(String str) {
        return IntStream.range(0, str.length()).filter(i -> alphabet.indexOf(str.charAt(i)) == i).toArray().length;
    }

    public static int[] solve(String[] arr){
        return Stream.of(arr).map(String::toLowerCase).mapToInt(Solution::countLetters).toArray();
    }
}