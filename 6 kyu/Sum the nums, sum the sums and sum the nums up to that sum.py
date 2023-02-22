'''
https://www.codewars.com/kata/60d2325592157c0019ee78ed

Let's define two functions:

S(N) — sum of all positive numbers not more than N
S(N) = 1 + 2 + 3 + ... + N

Z(N) — sum of all S(i), where 1 <= i <= N
Z(N) = S(1) + S(2) + S(3) + ... + S(N)
You will be given an integer N as input; your task is to return the value of S(Z(N)).

For example, let N = 3:

Z(3) = 1 + 3 + 6 = 10
S(Z(3)) = S(10) = 55
The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.

This is my first kata and I hope you'll enjoy it :).
Best of luck!
'''

# my solution
from decimal import Decimal, getcontext

def sum_of_sums(n):
    getcontext().prec = 100
    total = Decimal(n * (n + 1) * (n + 2)) / Decimal(6)
    sum = Decimal(total * (total + 1)) / Decimal(2)
    return sum