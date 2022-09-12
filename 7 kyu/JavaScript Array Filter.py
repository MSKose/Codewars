'''
https://www.codewars.com/kata/514a6336889283a3d2000001

In Python, there is a built-in filter function that operates similarly to JS's filter. For more information on how to use this function, visit https://docs.python.org/3/library/functions.html#filter

The solution would work like the following:

get_even_numbers([2,4,5,6]) => [2,4,6]
'''

# my solution
def get_even_numbers(arr):
    return [x for x in arr if not x%2]

