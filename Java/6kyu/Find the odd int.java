/*
https://www.codewars.com/kata/54da5a58ea159efa38000836/

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// my solution
import java.util.Map;
import java.util.Arrays;
import static java.util.function.Function.identity;
import static java.util.stream.Collectors.counting;
import static java.util.stream.Collectors.groupingBy;

public class FindOdd {
	public static int findIt(int[] a) {
        Map<Integer, Long> result = Arrays.stream(a)
                        .boxed()
                        .collect(groupingBy(identity(), counting()));
        return Arrays.stream(a)
                    .filter(c -> result.get(c) % 2 == 1)
                    .findFirst().orElse(-1);
    }
}