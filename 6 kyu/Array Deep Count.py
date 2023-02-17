'''
https://www.codewars.com/kata/596f72bbe7cd7296d1000029

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
'''

# my solution
def deep_count(a):
    return sum([deep_count(i) for i in a if isinstance(i, list)], len(a))