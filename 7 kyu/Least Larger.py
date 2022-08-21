'''
https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4

Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

Notes
Multiple correct answers may be possible. In this case, return any one of them.
The given index will be inside the given array.
The given array will, therefore, never be empty.

Example
leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
leastLarger( [4, 1, 3, 5, 6], 4 )  => -1
'''

# my solution
def least_larger(a, i): 
    arr = []
    
    for x in a:
        if x > a[i]:
            arr.append(x)
    
    return a.index(min(arr)) if arr else -1

#! alternative-solution
def least_larger(a, i):
    b = [x for x in a if x>a[i]]
    return a.index(min(b)) if b else -1
# basically my solution with list comprehension