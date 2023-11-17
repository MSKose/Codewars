/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// my solution
public class Kata {
    public static double findUniq(double arr[]) {
        for (int i = 0; i < arr.length - 2; i++) {
            if (arr[i] == arr[i + 1]) {
                if (arr[i] != arr[i + 2]) return arr[i + 2];
            } else if (arr[i] != arr[i + 1]) {
                if (arr[i] == arr[i + 2]) return arr[i + 1]; 
                else return arr[i];
            }
        }
        return -1;
    }
}