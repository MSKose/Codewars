/*
https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".
*/

// my solution
public class Kata {
    public static String switchItUp(int number) {
      return new String[] {"Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"}[number];
    }
}