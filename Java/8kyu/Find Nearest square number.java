/*
https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)
*/

// my solution
public class CodeWarsMath {
    public static int nearestSq(final int n){
      int resSq = (int) Math.round(Math.pow(n, 0.5));
      return (int) Math.pow(resSq, 2);
    }
}