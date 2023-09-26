/*
https://www.codewars.com/kata/586f6741c66d18c22800010a

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/

// my solution
public class Kata {
    public static int sequenceSum(int start, int end, int step) {
        int sum = 0;
    
        for (int first = start; first <= end; first += step) {
            sum += first;
        }
    
        return sum;
    }
}