'''
https://www.codewars.com/kata/5a00e05cc374cb34d100000d

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
'''

# my solution
def reverse_seq(n):
    return [i for i in range(1, n + 1)][::-1]