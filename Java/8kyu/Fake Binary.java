/*
https://www.codewars.com/kata/57eae65a4321032ce000002d/

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// my solution
public class FakeBinary {
    public static String fakeBin(String numberString) {
        return numberString.chars()
                  .map(c -> c < '5' ? '0' : '1')
                  .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                  .toString();
    }
}