/*
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// my solution
import java.util.stream.IntStream;

public class Kata {
  public static Object[] removeEveryOther(Object[] arr) {
    return IntStream
            .range(0, arr.length)
            .filter(i -> i % 2 == 0)
            .mapToObj(c -> arr[c])
            .toArray();
  }
}