/*
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

// my solution
public class Kata {
    public static int[] Solve(String word) {
        int a = word.replaceAll("[^A-Z]", "").length();
        int b = word.replaceAll("[^a-z]", "").length();
        int c = word.replaceAll("[^0-9]", "").length();
        int d = word.length() - (a + b + c);
        return new int[] {a, b, c, d};
    }
}