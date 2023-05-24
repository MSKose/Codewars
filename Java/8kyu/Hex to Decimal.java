/*
https://www.codewars.com/kata/57a4d500e298a7952100035d

Complete the function which converts hex number (given as a string) to a decimal number.
*/

// my solution
public class Kata {
  public static int hexToDec(final String hexString) {
    return Integer.parseInt(hexString, 16);
  }
}