/*
https://www.codewars.com/kata/59887207635904314100007b

Simply find the closest value to zero from the list. Notice that there are negatives in the list.

List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

Examples:

[2, 4, -1, -3]  => -1
[5, 2, -2]      => None
[5, 2, 2]       => 2
[13, 0, -6]     => 0
*/

// my solution
import java.util.Arrays;
import java.util.Comparator;

public class ClosestToZero {
    public static Integer find(int[] arr) {
        if (arr.length < 2) return Integer.MIN_VALUE;
        Integer[] sort = Arrays.stream(arr)
                            .boxed()
                            .distinct().sorted(Comparator.comparingInt(Math::abs))
                            .toArray(Integer[]::new);
        return sort[0] + sort[1] == 0 ? null : sort[0];
    }
}