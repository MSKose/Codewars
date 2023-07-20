/*
https://www.codewars.com/kata/542c0f198e077084c0000c2e

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

// my solution
public class FindDivisor {
    public long numberOfDivisors(int n) {
        int count = 0;
        
        for (int i = 1; i <= n; i++) {
            if ((double) n / i == n / i) {
            count++;
            }
        }
        
        return count;
    }
}

//! alternative-solution
import java.util.stream.IntStream;

public class FindDivisor {
  public long numberOfDivisors(int n) {
    return IntStream.range(1, n+1).filter(i -> n%i==0).count();
  }
}