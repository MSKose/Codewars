'''
https://www.codewars.com/kata/5825792ada030e9601000782

Implement zip_with
zip_with takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zip_with( pow, [10,10,10,10], [0,1,2,3] )     =>  [1,10,100,1000]
zip_with( max, [1,4,7,1,4,7], [4,7,1,4,7,1])  =>  [4,7,7,4,7,7]

def add(a,b): return a+b; # or from operator import add
zip_with( add,             [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  # Both forms are valid
zip_with( lambda a,b: a+b, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  # Both are functions
Input validation
Assume all input is valid.
'''

# my solution
def zip_with(fn, a1, a2):
    x = min(len(a1), len(a2))
    a1, a2 = a1[:x], a2[:x]
    return [fn(el, a2[idx]) for idx, el in enumerate(a1)]

#! alternative-solution-1
def zip_with(fn, a1, a2):
    return list(map(fn, a1, a2))

#! alternative-solution-2
def zip_with(fn,a1,a2):
    return [fn(i,j) for i,j in zip(a1,a2)]