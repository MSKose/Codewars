'''
https://www.codewars.com/kata/540c33513b6532cd58000259

Write a function that finds the sum of all its arguments.

eg:

sum_args(1, 2, 3) # => 6
sum_args(8, 2) # => 10
sum_args(1, 2, 3, 4, 5) # => 15
'''

# my solution
def sum_args(*args):
    return sum(args)