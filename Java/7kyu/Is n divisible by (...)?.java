/*
https://www.codewars.com/kata/558ee8415872565824000007

Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y 
*/

// my solution
public class Divisible {
    public static boolean isDivisible(int... args) {
        int firstArg = args[0];
        for (int i : args) {
            if (firstArg % i > 0) return false;
        }
        return true;
    }
}