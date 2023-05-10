/*
https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

// my solution
import java.lang.Math;

public class Solution {
  public static int century(int number) {
    return (int) Math.ceil((double) number / 100);
  }
}