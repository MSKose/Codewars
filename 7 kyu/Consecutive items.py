'''
https://www.codewars.com/kata/5f6d533e1475f30001e47514

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
'''

# my solution
def consecutive(arr, *x):
    return abs(arr.index(x[0]) - arr.index(x[1])) == 1


#! alternative-solution
def consecutive(arr, a, b):
    return any(u==a and v==b or u==b and v==a for u,v in zip(arr,arr[1:]))
# see here for zip: https://www.w3schools.com/python/ref_func_zip.asp