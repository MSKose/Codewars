'''
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
'''

# my solution
import functools

def find_average(numbers):
    a = functools.reduce(lambda x, y: x+y, numbers)
    b = len(numbers)
    return a / b
# remember, I have to import functools to use reduce method in py

#! alternative-solution-1
def find_average(array):
    return sum(array) / len(array) if array else 0
# so python has a sum() method for iterables that sums the items

#! alternative-solution-2
def find_average(array):
    try:
        return sum(array) / len(array)
    except ZeroDivisionError:
        return 0