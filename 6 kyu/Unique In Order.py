'''
https://www.codewars.com/kata/54e6533c92449cc251001667

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
'''

# my solution
def unique_in_order(iterable):
    if not iterable: return []
    
    result = []
    
    for idx, el in enumerate(iterable):
        if idx != len(iterable) - 1:
            if el != iterable[idx + 1]:
                result.append(el)
                
    result.append(iterable[-1])
         
    return result

#! alternative-solution-1
def unique_in_order(iterable):
    result = []
    prev = None
    for char in iterable[0:]:
        if char != prev:
            result.append(char)
            prev = char
    return result

#! alternative-solution-2
from itertools import groupby

def unique_in_order(iterable):
    return [k for (k, _) in groupby(iterable)]
