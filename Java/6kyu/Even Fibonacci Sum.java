/*
https://www.codewars.com/kata/55688b4e725f41d1e9000065

Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

eve_fib(0)==0
eve_fib(33)==10
eve_fib(25997544)==19544084
*/

// my solution
class Kata {
    public static long fibonacci(long max) {
        long pre2 = 1, pre1 = 0, sum = 0;

        while (pre2 < max) {
            long temp = 0;
            if (pre2 % 2 == 0) {
                sum += pre2;
            }
            temp = pre2;
            pre2 = pre1 + pre2;
            pre1 = temp;
        }

        return sum;
    }
}