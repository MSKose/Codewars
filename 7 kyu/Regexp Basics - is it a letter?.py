'''
https://www.codewars.com/kata/567de72e8b3621b3c300000b

Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
'''

# my solution
import re

def is_letter(s):
    return len(s) == 1 and len(re.findall("[a-zA-Z]", s)) == 1

#! alternative-solution-1
def is_letter(s):
    return len(s) == 1 and s.isalpha()

#! alternative-solution-2
import re
def is_letter(s):
    return bool(re.fullmatch("[A-Za-z]",s))