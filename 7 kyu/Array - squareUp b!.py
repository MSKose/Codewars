'''
https://www.codewars.com/kata/5a8bcd980025e99381000099

This is a question from codingbat

Given an integer n greater than or equal to 0, create and return an array with the following pattern:

squareUp(3) => [0, 0, 1, 0, 2, 1, 3, 2, 1]
squareUp(2) => [0, 1, 2, 1]
squareUp(4) => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
0 <= n <= 1000.
'''

# my solution
def square_up(n):
    return [(n - k) if k >= (n - i - 1) else 0 for i in range(n) for k in range(n)]