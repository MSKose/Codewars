/*
https://www.codewars.com/kata/58daa7617332e59593000006

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

// my solution
public class MostDigits {
    public static int findLongest(int[] numbers) {
        int max = 0;
        
        for (int i : numbers) {
            if (Integer.toString(Math.abs(i)).length() > Integer.toString(Math.abs(max)).length()) {
            max = i;
            }
        }
        
        return max;
    }
}