'''
https://www.codewars.com/kata/55f2a1c2cb3c95af75000045

Given an x and y find the smallest and greatest numbers above and below a given n that are divisible by both x and y.

Examples
greatest(2, 3, 20) => 18   # 18 is the greatest number under 20 that is divisible by both 2 and 3
smallest(2, 3, 20) => 24   # 24 is the smallest number above 20 that is divisible by both 2 and 3

greatest(5, 15, 100) => 90
smallest(5, 15, 100) => 105

greatest(123, 456, 789) => 0   # there are no numbers under 789 that are divisible by both 123 and 456
smallest(123, 456, 789) => 18696
Notes:

you should never return n even if it is divisible by x and y always the number above or below it
greatest should return 0 if there are no numbers under n that are divisible by both x and y
and all arguments will be valid (integers greater than 0).
Note for Haskell users
Please take a look at bkaes comment and give us your opinion
'''

# my solution
from math import gcd

def greatest(x, y, n):
    lcm = (x * y) // gcd(x, y)
    res = lcm * ((n-1) // lcm)
    return 0 if res >= n else res
    
def smallest(x, y, n):
    lcm = (x * y) // gcd(x, y)
    res = lcm * (n // lcm + 1)
    return res