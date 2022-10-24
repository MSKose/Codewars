'''
https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
'''

# my solution
def two_sort(array):
    x = sorted(array)[0]
    return '***'.join(x)

#! alternative-solution
def two_sort(lst):
    return '***'.join(min(lst))