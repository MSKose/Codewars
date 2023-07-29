/*
https://www.codewars.com/kata/57a1d5ef7cb1f3db590002af

Create function fib that returns n'th element of Fibonacci sequence (classic programming task).
*/

// my solution
public class Fibonacci {
	public static long fib (int n){
	int pre1 = 0;
    int pre2 = 1;
    int temp = 0;

    if (n <= 0) return n;

    for (int i = 0; i < n - 1; i++) {
        temp = pre2;
        pre2 = pre1 + pre2;
        pre1 = temp;
    }

    return pre2;
	}
}