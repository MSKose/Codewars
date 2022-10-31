'''
https://www.codewars.com/kata/57f609022f4d534f05000024

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
'''

# my solution
from functools import reduce

def stray(arr):
    return reduce((lambda x, y: x ^ y), arr)
# see here: https://dev.to/bladesensei/xor-operator-in-programming-use-case-34ng

#! alternative-solution
def stray(arr):
    return min(arr, key=arr.count)