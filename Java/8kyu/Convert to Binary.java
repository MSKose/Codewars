/*
https://www.codewars.com/kata/59fca81a5712f9fa4700159a

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)   should return 1 
to_binary(5)   should return 101 
to_binary(11)  should return 1011 
Example:

toBinary(1)   should return 1 
toBinary(5)   should return 101 
toBinary(11)  should return 1011 
*/

// my solution
public class Kata {
    public static int toBinary(int n) {
      return Integer.parseInt(Integer.toBinaryString(n));
    }
}