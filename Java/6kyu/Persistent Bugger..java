/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// my solution
import java.util.Arrays;

class Persist {
	public static int persistence(long n) {
	int count = 0;
    
    while (n > 9) {
        n = Arrays.stream(String.valueOf(n).split(""))
                .map(Long::parseLong)
                .reduce((x, y) -> x * y)
                .orElse(0L);
        count++;
    }
    
    return count;
	}
}

// my second solution
class Persist {
	public static int persistence(long n) {
		int count = 0;
    
    while (n > 9) {
        n = String.valueOf(n).chars()
                .reduce((x, y) -> x * (y - 48))
                .orElse(0);
        count++;
    }
    
    return count;
	}
}