'''
https://www.codewars.com/kata/5a1a9e5032b8b98477000004

Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
'''

# my first solution
def even_last(numbers): 
    x = sum([el for idx, el in enumerate(numbers) if not idx%2], 0)
    y = not len(numbers) or numbers[-1]
    return  x*y 

#! alternative-solution
def even_last(numbers): 
    return sum(numbers[::2]) * numbers[-1] if numbers else 0
# good ol' slicing lol 