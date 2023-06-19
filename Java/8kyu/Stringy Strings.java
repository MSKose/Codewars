/*
https://www.codewars.com/kata/563b74ddd19a3ad462000054

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

// my solution
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Kata {
  public static String stringy(int size) {
    return IntStream.range(0, size)
                    .mapToObj(i -> i%2 == 0 ? "1" : "0")
                    .collect(Collectors.joining());
  }
}

//! alternative-solution
public static String stringy(int size) {
    StringBuilder res = new StringBuilder(size);
    for (int i = 0; i < size; i++) {
      res.append(i % 2 == 0 ? 1 : 0);
    }
    return res.toString();
}