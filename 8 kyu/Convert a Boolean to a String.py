'''
https://www.codewars.com/kata/551b4501ac0447318f0009cd

Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
'''

# my solution
def boolean_to_string(b):
    return "True" if b else "False"

#! alternaive-solution 
def boolean_to_string(b):
    return str(b)