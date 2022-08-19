'''
https://www.codewars.com/kata/5558cc216a7a231ac9000022/

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
'''

# my solution
def duplicates(array):
    for i in set(array):
        if i in array:
            array.pop(array.index(i))
            
    x = dict.fromkeys(array)
    return list(x)

#! alternative-solution-1
def duplicates(array):
    seen = []
    dups = []
    for char in array:
        if char not in seen:
             seen.append(char)
        elif char not in dups:
             dups.append(char)
    
    return dups
# wow, this is clever

#! alternative-solution-2
def duplicates(array):
    return [n for i, n in enumerate(array) if array[:i].count(n) == 1]