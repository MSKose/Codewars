/*
https://www.codewars.com/kata/59f11118a5e129e591000134

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

// my solution
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Solution{
    public static int repeats(int [] arr){
        Set<Integer> setOfUniques = new HashSet<>();
        Set<Integer> setOfDuplicates = new HashSet<>();

        for (int i : arr) {
            if (!setOfUniques.add(i)) {
                setOfDuplicates.add(i);
                setOfUniques.remove(i);
            }
        }

        return Arrays.stream(arr).filter(c -> setOfUniques.contains(c)).sum();
    }
}