/*
https://www.codewars.com/kata/5b853229cfde412a470000d0/

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

// my solution
public class TwiceAsOld{
    public static int TwiceAsOld(int dadYears, int sonYears){
      return Math.abs(sonYears * 2 - dadYears);
    }
}