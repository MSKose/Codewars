'''
https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
'''

# my solution
def remove_exclamation_marks(s):
    return ''.join(x for x in s if x != '!')
# I did it! I used generator espression for the first time
# ever since I read this was the pythonic way to go, it's the
# first time I used it. For future reference, in js I'd probably
# use filter method but I read that list comprehension and generator
# comprehension are more pythonic.

#! alternative-solution
def remove_exclamation_marks(s):
    return s.replace('!', '')
# looks like replace method is opted more for this katas solution