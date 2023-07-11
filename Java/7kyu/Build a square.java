/*
https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/

// my solution
public class Kata {
    public static final String generateShape(int n) {
        StringBuilder str = new StringBuilder();

        for (int i = 1; i <= n; i++) {
            if (i == n) {
                str.append("+".repeat(n));
            } else {
                str.append("+".repeat(n) + "\n");
            }
        }

        return str.toString();
    }
}

//! alternative-solution-1
import java.util.*;
import java.util.stream.*;

public class Kata {
    public static final String generateShape(final int n) {
        return IntStream
        .range(0, n)
        .mapToObj(c -> "+".repeat(n))
        .collect(Collectors.joining("\n"));
    }
}

//! alternative-solution-2
public class Kata {
    public static final String generateShape(int n) {
        return ("+".repeat(n) + "\n").repeat(n).trim();
    }
}