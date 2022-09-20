'''
https://www.codewars.com/kata/54da5a58ea159efa38000836/

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
'''

# my solution
from collections import Counter

def find_it(seq):
    dict = Counter(seq)
    
    for i in set(seq):
        if dict[i] % 2 == 1:
            return i

#! alternative-solution-1
def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i

#! alternative-solution-2
import operator
from functools import reduce

def find_it(xs):
    return reduce(operator.xor, xs)
# explanation from a comment: xor(a, a) = 0 and xor(a, 0) = a. So, when you xor all the numbers, every 
# number with even frequency gets cancelled out and only the number with odd frequence remains.

#! alternative-solution-3
def find_it(seq):
    result = 0
    for x in seq:
        result ^= x
    return result
# similar to the fashion in solution-2, this is also solved with bitwise XOR