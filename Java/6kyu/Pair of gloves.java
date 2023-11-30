/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

// my solution
import java.util.Map;
import java.util.Arrays;
import static java.util.function.Function.identity;
import static java.util.stream.Collectors.counting;
import static java.util.stream.Collectors.groupingBy;

class Kata {
    public static int numberOfPairs(String[] gloves) {
        Map<String, Long> result = Arrays.stream(gloves)
                            .collect(groupingBy(identity(), counting()));
        return Arrays.stream(gloves)
                    .distinct()
                    .mapToInt(y -> (int) (result.get(y) / 2))
                    .sum();
    }
}