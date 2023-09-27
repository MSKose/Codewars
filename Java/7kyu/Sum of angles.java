/*
https://www.codewars.com/kata/5a03b3f6a1c9040084001765

Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

// my solution
public class AngleSum {
    public static int sumOfAngles(int n) {
        return 180 * (n - 2);
    }
}