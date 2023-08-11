/*
https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

// my solution
package kata;
import java.util.List;
import java.util.Arrays;

public class Solution{
    public static String capitalize(String s, int[] ind){
        StringBuilder result = new StringBuilder();
        List<Integer> arr = Arrays.stream(ind).boxed().toList();

        for (int i = 0; i < s.length(); i++) {
            char x = s.charAt(i);
            if (arr.contains(i)) {
                result.append(Character.toUpperCase(x));
            } else {
                result.append(x);
            }
        }

        return result.toString();
    }
}