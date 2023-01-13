'''
https://www.codewars.com/kata/58daa7617332e59593000006

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
'''

# my solution
def find_longest(arr):
    return [i for i in arr if len(str(sorted(arr)[-1])) == len(str(i))][0]

#! alternative-solution
def find_longest(xs):
    return max(xs, key=lambda x: len(str(x)))