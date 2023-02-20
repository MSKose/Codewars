'''
https://www.codewars.com/kata/5411c4205f3a7fd3f90009ea

Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.

For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"

Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.
'''

# my solution
import re

def string_parse(string):
    return re.sub(r'(\w)\1{2,}', lambda x: x.group()[:2] + '[' + x.group()[2:] + ']', string) \
            if isinstance(string, str) \
            else 'Please enter a valid string'

#! alternative-solution
import re
def string_parse(string):
    return re.sub(r'(.)\1(\1+)', r'\1\1[\2]', string) if isinstance(string, str) else 'Please enter a valid string'