'''
https://www.codewars.com/kata/57fae964d80daa229d000126

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
'''

# my solution
def remove(s):
    return s[:-1] if s and s[-1] == '!' else s

#! alternative-solution-1
def remove(s):
    return s[:-1] if s.endswith('!') else s

#! alternative-solution-2
def remove(s):
    import re
    return re.sub(r'!$', '', s)