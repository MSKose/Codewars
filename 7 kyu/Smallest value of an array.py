'''
https://www.codewars.com/kata/544a54fd18b8e06d240005c0

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
'''

# my solution
def find_smallest(n, r):
    return n.index(min(n)) if r == 'index' else min(n)