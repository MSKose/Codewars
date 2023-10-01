/*
https://www.codewars.com/kata/555eded1ad94b00403000071

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

// my solution
public class NthSeries {
	public static String seriesSum(int n) {
		double x = 0;
    
        for (int i = 0; i < n; i++) {
        x += 1.0 / (1 + i * 3);
        }
        
        return String.format("%.2f", x);
	}
}

// my second solution
import java.math.BigDecimal;

public class NthSeries {
    public static String seriesSum(int n) {
        BigDecimal sum = BigDecimal.ZERO;

        for (int i = 0; i < n; i++) {
            BigDecimal term = BigDecimal.ONE.divide(BigDecimal.valueOf(1 + i * 3), 10, BigDecimal.ROUND_HALF_UP);
            sum = sum.add(term);
        }

        return sum.setScale(2, BigDecimal.ROUND_HALF_UP).toString();
    }
}