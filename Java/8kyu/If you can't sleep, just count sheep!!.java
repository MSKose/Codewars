/*
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

// my solution
class Kata {
    public static String countingSheep(int num) {
      StringBuilder str = new StringBuilder();
      for (int i = 1; i <= num; i++) {
        str.append(i + " sheep...");
      }
      return str.toString();
    }
}

//! alternative-solution
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Kata {
  public static String countingSheep(int num) {
    return IntStream.rangeClosed(1, num)
                    .mapToObj(i -> i + " sheep...")
                    .collect(Collectors.joining());
  }
}