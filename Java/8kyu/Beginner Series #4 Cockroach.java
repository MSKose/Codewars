/*
https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

// my solution
public class Cockroach{
  public int cockroachSpeed(double x){
    return (int) (x * 100 * 1000 / 60 / 60) | 0;
  }
}