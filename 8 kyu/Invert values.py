'''
https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
'''

# my solution
def invert(lst):
    return list(map(lambda x: x * -1, lst))

#! alternative-solution
def invert(lst):
    return [-i for i in lst]
# read in the comments that opting for list comprehension method
# is more pythonic way of solving such problems. And since I have
# recently swithed from js, it'll be hard to ditch map, filter methods;)