/*
https://www.codewars.com/kata/5818d00a559ff57a2f000082

The Pell sequence is the sequence of integers defined by the initial values

P(0) = 0, P(1) = 1
and the recurrence relation

P(n) = 2 * P(n-1) + P(n-2)
The first few values of P(n) are

0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 13860, 33461, 80782, 195025, 470832, ..
Task
Your task is to return the nth Pell number
*/

// my solution
import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

public class Solution {
    private static Map<Integer, BigInteger> cache = new HashMap<>();
    
    public static BigInteger pell(int n) {
        cache.put(0, BigInteger.ZERO);
        cache.put(1, BigInteger.ONE);

        for (int i = 2; i <= n; i++) {
            cache.put(i, BigInteger.valueOf(2).multiply(cache.get(i - 1)).add(cache.get(i - 2)));
        }

        return cache.get(n);
    }
}