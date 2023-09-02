/*
https://www.codewars.com/kata/560a4962c0cc5c2a16000068

Not considering number 1, the integer 153 is the first integer having this property: the sum of the third-power of each of its digits is equal to 153. Take a look: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153

The next number that experiments this particular behaviour is 370 with the same power.

Write the function eq_sum_powdig(), that finds the numbers below a given upper limit hMax (inclusive) that fulfills this property but with different exponents as the power for the digits.

eq_sum_powdig(hMax, exp): ----> sequence of numbers (sorted list) (Number one should not be considered).

Let's see some cases:

eq_sum_powdig(100, 2) ----> []

eq_sum_powdig(1000, 2) ----> []

eq_sum_powdig(200, 3) ----> [153]

eq_sum_powdig(370, 3) ----> [153, 370]
Enjoy it !!
*/

// my solution
import java.util.ArrayList;
import java.util.List;

class Sumpowdig {
    public static long[] eqSumPowDig(long hmax, int exp) {
        List<Long> res = new ArrayList<>();

        for (int i = 2; i <= hmax; i++) {
            long sum = 0;
            
            for (char c : Integer.toString(i).toCharArray()) {
                sum += Math.pow(Character.getNumericValue(c), exp);
            }
            
            if (sum == i) {
                res.add(sum);
            }
        }

        return res.stream().mapToLong(Long::longValue).toArray();
    }
}