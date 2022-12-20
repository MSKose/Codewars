'''
https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
'''

# my solution
def last_index_of(list, value):
    return len(list) - list[::-1].index(value) - 1

def sum_no_duplicates(l):
    sum = 0
    for idx, el in enumerate(l):
        if l.index(el) == last_index_of(l, el):
            sum += el
    return sum

#! alternative-solution-1
from collections import Counter

def sum_no_duplicates(nums):
    return sum(k for k, v in Counter(nums).items() if v == 1)

#! alternative-solution-2
def sum_no_duplicates(l):
    return sum(n for n in set(l) if l.count(n) == 1)