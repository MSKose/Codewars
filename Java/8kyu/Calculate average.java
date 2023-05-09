/*
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// my solution
import java.util.Arrays;

public class Kata{
  public static double find_average(int[] array){
    return array.length > 0 ? Arrays.stream(array).sum() / (double) array.length : 0;
  }
}